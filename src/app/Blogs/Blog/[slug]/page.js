import React from "react";
import Link from "next/link";
import { getSingleURL } from "../../../../../allLinks";
import NotFound from "../not-found";
import BlogHeader from "@/Components/BlogHeader";

const page = async ({ params }) => {
  const res = await fetch(getSingleURL + params.slug);
  const data = await res.json();
  const { title, category, description, image, artical, author, views } = data
    ? data
    : {};
  if (artical === undefined) {
    return (
      <div className="bg-white h-full ">
        <NotFound />
      </div>
    );
  }

  return (
    <>
      <div className="bg-white h-full p-5 ">
        <BlogHeader title={title} />

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
                __html: artical,
              }}
            />
          </section>
        </div>
      </div>
    </>
  );
};

export default page;
