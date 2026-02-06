import Link from "next/link";
import React from "react";

const postList = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=5`,
  );
  const posts = await res.json();

  return (
    <div>
      <h1>This is post list page</h1>
      <ul>
        <li>
          <Link href="/post-list/demo">Demo</Link>
        </li>
        {posts?.map((post) => (
          <li key={post.id}>
            <Link href={`/post-list/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default postList;
