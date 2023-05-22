import { getAllBlogsURL, getSingleURL, incView } from "../../allLinks";

// to get All blogs
export const getBlogs = async () => {
  const res = await fetch(getAllBlogsURL);
  return res.json();
};

// to get single Blog
export const getsingle = async (id) => {
  const res = await fetch(getSingleURL + id,);
  return res.json();
};
