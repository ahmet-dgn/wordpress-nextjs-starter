import getData from "@/lib/query";

export const dynamicParams = true;
export async function generateStaticParams() {
  const response = await fetch(`${process.env.WORDPRESS_API_URL}/posts`);
  const posts = await response.json();

  return posts.map((post) => ({
    slug: post.slug.toString(),
  }));
}

export default async function Post({ params }) {
  const query = await getData(`posts/?slug=${params.slug}`);
  const [postData] = query.props.data;
  if (!postData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="single-blog-page">
      <h2>{postData.title.rendered}</h2>
      <div className="blog-post">
        <div
          dangerouslySetInnerHTML={{ __html: postData.content.rendered }}
        ></div>
      </div>
    </div>
  );
}
