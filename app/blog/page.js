import getData from "@/lib/query";
import Link from "next/link";
import Pagination from "@/components/pagination";
export default async function Blog({ searchParams }) {
  const pageLimit = 6;
  const page = searchParams.per_page;
  const blogList = await getData(
    `posts/?per_page=${pageLimit}${page ? "&page=" + page : ""}`
  );

  return (
    <>
      {blogList}
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
      <Pagination path={"blog"} pageLimit={pageLimit} page={page} />
    </>
  );
}
