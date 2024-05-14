import getData from "@/lib/query";
import Link from "next/link";
import Pagination from "@/components/pagination";
export default async function Blog({ searchParams }) {
  //pageLimit: The number of post in each page
  //pageTotal: The number of pages(come from wordpress api)
  //blogList: The posts data
  //searchParams: It is next.js feture. Returns query (?) parameters in url
  const pageLimit = 3;
  let page = searchParams.page;
  const query = await getData(
    `posts?per_page=${pageLimit}${page ? "&page=" + page : "&page=1"}`
  );
  console.log(page);

  const blogList = query.props.data;
  const pageTotal = query.props.xWpTotalPages;

  return (
    <>
      {blogList.map((blog) => (
        <div>
          <Link href={`blog/${blog.slug}`} className="post" key={blog.slug}>
            {blog.title.rendered}

            <div
              dangerouslySetInnerHTML={{ __html: blog.content.rendered }}
            ></div>
          </Link>
        </div>
      ))}

      {pageTotal > 1 && (
        <Pagination
          path={"blog"}
          pageLimit={pageLimit}
          page={page}
          pageTotal={pageTotal}
        />
      )}
    </>
  );
}
