import getData from "../lib/getData";

export default async function SinglePost() {
  const post = await getData(`http://localhost:8000/posts/2`, {
    cache: "no-store", // its default value is force-cache
  });
  console.log("single post being rendered");

  return (
    <div className="mt-4">
      <h1>{post.body}</h1>
    </div>
  );
}
