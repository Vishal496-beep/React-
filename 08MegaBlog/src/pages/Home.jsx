import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    appwriteService.getPosts().then((fetchedPosts) => {
      if (fetchedPosts) {
        setPosts(fetchedPosts);
      }
      setLoading(false);
    });
  }, []);

  // Loading state
  if (loading) {
    return (
      <div className="py-8">
        <Container>
          <h2 className="text-xl text-center">Loading posts...</h2>
        </Container>
      </div>
    );
  }

  // No posts (user not logged in or empty)
  if (posts.length === 0) {
    return (
      <div className="py-8">
        <Container>
          <h2 className="text-2xl font-semibold text-center">
            Login to Read Posts
          </h2>
        </Container>
      </div>
    );
  }

  // Show posts
  return (
    <div className="py-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard key={post.$id} {...post} />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
