import React from "react";
import { getAllBlogsURL } from "../../allLinks";
import BlogCard from "./BlogCard";
import BlogsHeader from "./BlogsHeader";

export default async function AllBlogs({ page, setpage }) {
  const res = await fetch(getAllBlogsURL + `?page=${page}&limit=8`);
  const { blogs, totalPages } = await res.json();

  if (blogs === undefined) {
    return (
      <div className="h-screen w-full grid place-items-center  bg-white ">
        Error occuured
      </div>
    );
  }
  return (
    <>
      {blogs.length === 0 && (
        <div className="w-full h-90 grid place-items-center bg-white mt-5">
          No Blogs Found
        </div>
      )}
      <BlogsHeader /> 
      <section className="mt-[148px]  grid grid-cols-2  md:grid-cols-4 gap-5  ">
        {blogs &&
          blogs.map((i, index) => {
            return (
              <BlogCard
                key={index}
                title={i.title.substring(0, 32) + "..."}
                category={i.category}
                description={i.description.substring(0, 60) + "..."}
                image={i.image}
                id={i._id}
                views={i.views}
              />
            );
          })}
      </section>
      <div className="w-full mt-5 flex justify-between">
        <button
          disabled={page === 1 ? true : false}
          onClick={() => {
            setpage(page - 1);
          }}
          className="pBtn px-5 py-2 disabled:bg-red-300"
        >
          PREV
        </button>
        <button
          disabled={page === totalPages ? true : false}
          onClick={() => {
            setpage(page + 1);
          }}
          className="pBtn px-5 disabled:bg-red-300 py-2"
        >
          NEXT
        </button>
      </div>
    </>
  );
}
