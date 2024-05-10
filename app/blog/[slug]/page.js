export const dynamicParams = true;

export async function generateStaticParams() {
  const response = await fetch(
    `https://admin.lainoxturkiye.com/wp-json/wp/v2/posts`
  );
  const posts = await response.json();

  return posts.map((post) => ({
    postSlug: post.slug,
  }));
}

async function getSinglePost(postSlug) {
  const response = await fetch(
    `https://admin.lainoxturkiye.com/wp-json/wp/v2/posts/${postSlug}`
  );
  const post = await response.json();
  return post;
}

const page = async ({ params }) => {
  const post = await getSinglePost(params.postSlug);
  console.log(post);
  if (!post) {
    return <div>Loading...</div>;
  }

  return <div className="single-blog-page"></div>;
};

export default page;
