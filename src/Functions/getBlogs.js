import { notFound } from "next/navigation";
import { getAllBlogsURL, incView } from "../../allLinks";

// to get All blogs
export const getBlogs = async () => {
  const res = await fetch(getAllBlogsURL);
  return res.json();
};

