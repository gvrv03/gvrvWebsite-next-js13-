import { getBlogs } from "@/Functions/getBlogs";
import React from "react";
import BlogCard from "./BlogCard";

export default async function AllBlogs() {
  const { body } = await getBlogs();
  if (!body) {
    return (
      <section className="mt-5 grid grid-cols-1  h-90 md:grid-cols-3 gap-5 justify-between overflow-y-scroll flex-wrap ">
        Not found
      </section>
    );
  }
  return (
    <section className="mt-5 grid grid-cols-1  h-90 md:grid-cols-3 gap-5 justify-between overflow-y-scroll flex-wrap ">
      {body.map((i, index) => {
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
  );
}
