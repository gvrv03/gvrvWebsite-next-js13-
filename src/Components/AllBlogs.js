import React from "react";
import { getAllBlogsByQueryObj } from "../../allLinks";
import BlogCard from "./BlogCard";
import BlogsHeader from "./BlogsHeader";

export default async function AllBlogs() {
  const res = await fetch(getAllBlogsByQueryObj, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      queryObject: {},
      skip: 0,
      limit: 0,
      sortingObj: {},
    }),
  });
  const Data = await res.json();
  if (Data.Blogs && Data.Blogs === undefined) {
    return (
      <div className="h-screen w-full grid place-items-center  bg-white ">
        Error occuured
      </div>
    );
  }
  return (
    <>
      {Data.Blogs && Data.Blogs.length === 0 && (
        <div className="w-full h-90 grid place-items-center bg-white mt-5">
          No Blogs Found
        </div>
      )}
      <BlogsHeader />
      <section className="mt-36 grid grid-cols-2  md:grid-cols-4 gap-5 ">
        {Data.Blogs &&
          Data.Blogs.map((i, index) => {
            return (
              <BlogCard
                key={index}
                title={i.title}
                category={i.category}
                description={i.description.substring(0, 100) + "..."}
                image={i.image}
                id={i._id}
                views={i.views}
              />
            );
          })}
      </section>
    </>
  );
}
