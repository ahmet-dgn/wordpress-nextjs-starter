export default async function getData(type) {
  const username = process.env.WORDPRESS_AUTH_USERNAME;
  const password = process.env.WORDPRESS_AUTH_PASSWORD;

  const response = await fetch(`${process.env.WORDPRESS_API_URL}/${type}`, {
    headers: {
      Authorization: "Basic " + btoa(`${username}:${password}`),
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  const xWpTotalPages = response.headers.get("x-wp-totalpages");
  return {
    props: {
      data,
      xWpTotalPages,
    },
  };
}
