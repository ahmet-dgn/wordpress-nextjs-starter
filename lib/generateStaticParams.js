export default async function generateStaticParams(type) {
  const response = await fetch(`${process.env.WORDPRESS_API_URL}/${type}`);
  const allData = await response.json();

  return allData.map((data) => ({
    slug: type.slug,
  }));
}
