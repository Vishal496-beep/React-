import React, { useEffect, useCallback } from "react";
import { useForm } from "react-hook-form";
import { Button, Select, RTE } from "../index";
import appwriteService from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Input from "../Input";

function PostForm({ post }) {
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    control,
    getValues,
  } = useForm({
    defaultValues: {
      title: post?.title || "",
      slug: post?.slug || "",
      content: post?.content || "",
      status: post?.status || "active",
    },
  });

  // --------------------------
  // 🔧 Slug Transformer
  // --------------------------
  const slugTransform = useCallback((value) => {
    if (!value) return "";

    return value
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, "")
      .replace(/\s+/g, "-");
  }, []);

  // --------------------------
  // 🔧 Auto-update slug on title change
  // --------------------------
  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "title") {
        setValue("slug", slugTransform(value.title), {
          shouldValidate: true,
        });
      }
    });

    return () => subscription.unsubscribe();
  }, [watch, slugTransform, setValue]);

  // --------------------------
  // 🔧 Submit Handler
  // --------------------------
  const submit = async (data) => {
    const file = data.image?.[0]
      ? await appwriteService.uploadFile(data.image[0])
      : null;

    if (post) {
      // ----- UPDATE POST -----
      if (file) {
        await appwriteService.deleteFile(post.featuredImage);
      }

      const dbPost = await appwriteService.updatePost(post.$id, {
        ...data,
        featuredImage: file ? file.$id : post.featuredImage,
      });

      if (dbPost) navigate(`/post/${dbPost.$id}`);
    } else {
      // ----- CREATE NEW POST -----
      if (!file) return alert("Featured image is required");

      const dbPost = await appwriteService.createPost({
        ...data,
        featuredImage: file.$id,
        userId: userData.$id,
      });

      if (dbPost) navigate(`/post/${dbPost.$id}`);
    }
  };

  // --------------------------
  // 🔧 UI
  // --------------------------
  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
      {/* LEFT SIDE */}
      <div className="w-full md:w-1/2 p-2">
        <Input
          label="Title"
          className="mb-4"
          placeholder="Post Title"
          {...register("title", { required: true })}
        />

        <Input
          label="Slug"
          className="mb-4"
          placeholder="post-slug"
          {...register("slug", { required: true })}
          onInput={(e) =>
            setValue("slug", slugTransform(e.target.value), {
              shouldValidate: true,
            })
          }
        />

        <RTE
          label="Content"
          className="mb-4"
          control={control}
          name="content"
          defaultValue={getValues("content")}
        />
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full md:w-1/2 p-2">
        {/* IMAGE UPLOAD */}
        <div className="mb-4">
          <label className="block mb-2 font-bold">Featured Image</label>

          <input
            type="file"
            accept="image/*"
            {...register("image", { required: !post })}
          />

          {post && (
            <div className="w-full mb-4">
              <img
                src={appwriteService.getFilePreview(post.featuredImage)}
                alt={post.title}
                className="w-full h-auto mt-2 rounded"
              />
            </div>
          )}
        </div>

        {/* STATUS SELECT */}
        <Select
          options={["active", "inactive"]}
          label="Status"
          className="mb-4"
          {...register("status", { required: true })}
        />

        {/* SUBMIT BUTTON */}
        <Button type="submit" bgColor={post ? "green" : "blue"}>
          {post ? "Update Post" : "Create Post"}
        </Button>
      </div>
    </form>
  );
}

export default PostForm;
