import { revalidateTag } from "next/cache";
import getData from "../../../../lib/getData";

const ODR = async () => {
  //revalidateTag(getPosts); // invalidates everything that are cached with the tag getPosts

  const posts = await getData(`http://localhost:8000/posts`, {
    next: {
      //tag: ["getPosts"], // It is not in action now but when server action is available
    },
  });

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold">
        On-Demand Revalidation in Incremental Static Regeneration
      </h1>
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

export default ODR;
