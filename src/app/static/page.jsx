import getData from "../../../lib/getData";

const Static = async () => {
  const posts = await getData(`http://localhost:8000/posts`);

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold">Static</h1>
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

export default Static;
