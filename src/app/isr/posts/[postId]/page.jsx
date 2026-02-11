import getData from "../../../../../lib/getData";

// SSG-Static Site Generation
export const generateStaticParams = async () => {
  const posts = await getData(`http://localhost:8000/posts`);

  return posts.map((post) => ({
    postId: String(post.id),
  }));
};

const page = async ({ params }) => {
  const { postId } = await params;

  const post = await getData(`http://localhost:8000/posts/${postId}`);

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <div>{post.body}</div>
    </div>
  );
};

export default page;
