import Link from "next/link";

async function getPosts() {
  const response = await fetch(`${process.env.WORDPRESS_API_URL}/posts`);
  const posts = await response.json();
  return posts;
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <div className="blog-page">
      <h2>All Blog Posts</h2>
      <p>All blog posts are fetched from WordPress via the WP REST API.</p>
      <div className="posts">
        {posts.map((post) => {
          return (
            <>
              <h3>{post.title.rendered}</h3>
              <p
                dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
              ></p>
            </>
          );
        })}
      </div>
    </div>
  );
}
