import getData from "../../../../lib/getData";

export const dynamic = "force-dynamic"; // This named export is used for making a static
// page dynamic without having any dynamic elements in the static page

const forceDynamic = async () => {
  const posts = await getData(`http://localhost:8000/posts`);

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold">Static page to Dynamic forcefully </h1>
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

export default forceDynamic;
