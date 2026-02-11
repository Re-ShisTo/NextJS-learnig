import Link from "next/link";
import getData from "../../../../lib/getData";

const posts = async () => {
  const posts = await getData(`http://localhost:8000/posts`, {});

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold">Post page for Dynamic Routing</h1>
      <div>
        <ul className="flex flex-col gap-4">
          {posts.map((post) => (
            <Link href={`/isr/posts/${post.id}`} key={post.id}>
              <li className="py-4">{post.title}</li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default posts;
