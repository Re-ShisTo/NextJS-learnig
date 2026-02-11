import { cache } from "react";
import getData from "../../../lib/getData";
import SinglePost from "../../../components/SinglePost";

const Hybrid = async () => {
  const posts = await getData(`http://localhost:8000/posts`);

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold">Hybrid</h1>
      <div>
        <ul className="flex flex-col gap-4">
          {posts.map((post) => (
            <li className="py-4" key={post.id}>
              {post.title}
            </li>
          ))}
        </ul>
      </div>
      <hr />
      <SinglePost />
    </div>
  );
};

export default Hybrid;
