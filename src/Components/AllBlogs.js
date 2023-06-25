import React from "react";
import { getAllBlogsURL } from "../../allLinks";
import BlogCard from "./BlogCard";

export default async function AllBlogs() {
  const res = await fetch(getAllBlogsURL);
  const data = await res.json();
  if (data === undefined) {
    return (
      <div className="h-screen w-full grid place-items-center  bg-white ">
        Error occuured
      </div>
    );
  }
  return (
    <>
      {data.length === 0 && (
        <div className="w-full h-90 grid place-items-center bg-white mt-5">
          No Blogs Found
        </div>
      )}
      <BlogsHeader/>
      <section className="mt-5 grid grid-cols-2  h-90 md:grid-cols-3 gap-5 justify-between overflow-y-scroll flex-wrap ">
        {data &&
          data.map((i, index) => {
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
