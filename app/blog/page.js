import getData from "@/lib/query";
import Link from "next/link";
export default async function Blog() {
  const blogList = await getData("posts");
  return (
    <>
      {blogList.map((blog) => (
        <div>
          <Link href={`/blog/${blog.slug}`} className="post" key={blog.slug}>
            {blog.title.rendered}

            <div
              dangerouslySetInnerHTML={{ __html: blog.content.rendered }}
            ></div>
          </Link>
        </div>
      ))}
    </>
  );
}
