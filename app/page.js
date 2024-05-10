import getData from "@/lib/query";

export default async function Home() {
  const posts = await getData("menu-items");

  return (
    <div className="blog-page">
      <h2>All Blog Posts</h2>
      <p>{posts[0].url}</p>
    </div>
  );
}
