import React from "react";

const postDetails = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();
  return (
    <div>
      <h1>This is post details page of id {post.id}</h1>
      <h2>Title: {post.title}</h2>
    </div>
  );
};

export const generateStaticParams = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=5`,
  );
  const posts = await res.json();

  return posts.map((post) => ({
    id: String(post.id),
  }));
};

export default postDetails;
