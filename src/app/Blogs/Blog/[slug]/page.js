import React from "react";
import Link from "next/link";
import { getSingleURL } from "../../../../../allLinks";

const page = async ({ params }) => {
  const res = await fetch(getSingleURL + params.slug);
  const data = await res.json();
  const { title, category, description, image, artical, author, views } = data
    ? data
    : {};
  if (title === null) {
    return (
      <div className="bg-white h-full p-5 ">
        <h1>Not Found</h1>
      </div>
    );
  }
  return (
    <>
      <div className="bg-white h-full p-5 ">
        <nav className="pb-5 flex  justify-between" aria-label="Breadcrumb">
          <ol className="inline-flex items-center md:text-xs text-sm space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link
                href="/"
                className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 "
              >
                <i className="uil uil-estate mr-2 pColor" />
                Home
              </Link>
            </li>
            <li aria-current="page">
              <Link href="/Blogs" className="flex items-center">
                <svg
                  aria-hidden="true"
                  className="w-6 h-6 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 ">
                  Blogs
                </span>
              </Link>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg
                  aria-hidden="true"
                  className="w-6 h-6 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 ">
                  {title}
                </span>
              </div>
            </li>
          </ol>
        </nav>

        <div className="h-90 overflow-y-scroll">
          <section className="">
            <h1 className="font-bold text-lg md:text-3xl">{title}</h1>
            <div className="mt-5 flex justify-between text-sm">
              <div>
                <span className="font-semibold mr-2">Author:</span>
                {author}
              </div>
              <div>
                {" "}
                <i className=" bi bi-eye-fill mr-2"></i> {views}{" "}
              </div>
            </div>
          </section>

          <div className="w-full h-1 bg-gray-200  mt-5 rounded-full" />
          <section className="mt-5">
            <img src={image} alt={title} />
            <article
              className="overflow-y-scroll  mt-5"
              dangerouslySetInnerHTML={{
                __html: artical ? artical : "",
              }}
            />
          </section>
        </div>
      </div>
    </>
  );
};

export default page;
