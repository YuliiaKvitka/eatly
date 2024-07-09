import BlogPost from "../BlogPost";

const posts = {
  "first-post": {
    title: "First Post",
    content: "This is the first post content."
  },
  "second-post": {
    title: "Second Post",
    content: "This is the second post content."
  }
};

export async function generateMetadata({ params }) {
  const { slug } = params;
  const post = posts[slug];

  return {
    title: post ? post.title : "Post not found",
    description: post ? post.content.slice(0, 150) : "Post not found"
  };
}

export default function BlogPostPage({ params }) {
  const { slug } = params;
  const post = posts[slug];

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
