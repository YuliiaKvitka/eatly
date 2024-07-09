import BlogList from "./BlogList";

export const metadata = {
  title: "Blog - Eatly",
  description: "Read our latest blog posts."
};

export default function BlogPage() {
  return (
    <div>
      <h1>Blog</h1>
      <BlogList />
    </div>
  );
}
