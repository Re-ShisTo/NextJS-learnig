import { cache } from "react";
import getData from "../../../lib/getData";

const dynamic = async () => {
  const posts = await getData(`http://localhost:8000/posts`, {
    cache: "no-store", // its default value is force-cache
  });

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold">Dynamic</h1>
      <div>
        <ul className="flex flex-col gap-4">
          {posts.map((post) => (
            <li className="py-4" key={post.id}>
              {post.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default dynamic;
