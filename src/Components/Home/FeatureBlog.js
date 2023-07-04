import React from "react";
import { getAllBlogsURL } from "../../../allLinks";
import BlogCard from "../BlogCard";
import HeaderName from "./HeaderName";

const FeatureBlog = async () => {
  const res = await fetch(getAllBlogsURL + `?page=1&limit=4`);
  const { blogs } = await res.json();
  return (
    <div className="   m-auto">
      <HeaderName name="Blog" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
        {blogs &&
          blogs.map((item) => {
            return (
              <BlogCard
                image={item.image}
                fullTitle={item.title}
                category={item.category}
                title={item.title.substring(0, 80)}
                description={item.description.substring(0, 100) + "..."}
                key={item._id}
                id={item._id}
                views={item.views}
              />
            );
          })}
      </div>
    </div>
  );
};
export default FeatureBlog;
