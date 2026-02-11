import { cache, Suspense } from "react";
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

      <Suspense
        fallback={
          <div>
            <h1>Loading... ... ...</h1>
          </div>
        }
      >
        <SinglePost />
      </Suspense>
    </div>
  );
};

export default Hybrid;
