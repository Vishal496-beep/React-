import React from "react";
import {Editor} from '@tinymce/tinymce-react'
import {Controller} from "react-hook-form";

export default function RTE({name, control, label, defaultValue=""}) {
    return (
       <div>
              {label && <label className="block mb-2 text-sm font-medium text-gray-900">{label}</label>}    
                <Controller 
                name={name}
                control={control}
                defaultValue={defaultValue}
                render={({field : {onChange}}) => (
                <Editor 
                initialValue="default value"
                init = {
                {branding: false,
                initialValue: defaultValue
                ,height: 500
                ,menubar: true
                ,plugins: [
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
                "anchor",
               ]
                ,toolbar:  "undo redo | blocks | bold italic forecolor backcolor | " +
                           "alignleft aligncenter alignright alignjustify | " +
                           "bullist numlist outdent indent | table | image media link | " +
                           "code fullscreen | removeformat | help",
                           
                content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px; }",


            }}
             onEditorChange={onChange}
        />
                  )}
                    
                />
       </div>
    )
}