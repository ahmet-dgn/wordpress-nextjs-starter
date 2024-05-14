import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";

export default function Pagination({ path, pageLimit, page, pageTotal }) {
  const pageArray = [];
  for (let i = 1; i <= pageTotal; i++) {
    pageArray.push(i);
  }
  console.log(page);
  return (
    <nav className="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0 mt-10 ">
      <div className="-mt-px flex w-0 flex-1">
        <Link
          href={`${path}?page=${page > 1 ? page - 1 : 1}`}
          className="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        >
          <ArrowLongLeftIcon
            className="mr-3 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
          Previous
        </Link>
      </div>
      <div className="hidden md:-mt-px md:flex">
        {pageArray.map((pageNumber) => (
          <Link
            key={pageNumber}
            href={`${path}?page=${pageNumber}`}
            className={`inline-flex items-center border-t-2 ${
              pageNumber == page
                ? "border-indigo-500 text-indigo-600"
                : "border-transparent text-gray-500"
            } px-4 pt-4 text-sm font-medium  hover:border-gray-300 hover:text-gray-700`}
          >
            {pageNumber}
          </Link>
        ))}
      </div>
      <div className="-mt-px flex w-0 flex-1 justify-end">
        <Link
          href={`${path}?page=${page < pageTotal ? ++page : pageTotal}`}
          className="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        >
          Next
          <ArrowLongRightIcon
            className="ml-3 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </Link>
      </div>
    </nav>
  );
}
