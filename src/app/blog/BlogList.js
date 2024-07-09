import Link from "next/link";

const posts = [
  { slug: "first-post", title: "First Post" },
  { slug: "second-post", title: "Second Post" }
];

export default function BlogList() {
  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`} passHref legacyBehavior>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
