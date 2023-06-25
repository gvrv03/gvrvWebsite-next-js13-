import baseUrl from "./baseUrl";

// Products
export const getProductsURL = baseUrl + "api/products";
export const getProductsByQueryOBJURL = baseUrl + "api/GetProductByQueryObj";
// {
//     "queryObject": {},
//     "skip": 0,
//     "limit": 0,
//     "sortingObj": {}
//   }
export const downloadProductURL = baseUrl + "api/ProductDown";
export const getSingleProductURL = baseUrl + "api/products/Product/";

// Blogs
export const getAllBlogsURL = baseUrl + "api/blogs";
export const getAllBlogsByQueryObj = baseUrl + "api/GetBlogsByQueryObj";
export const getSingleURL = baseUrl + "api/blogs/Post/";

// Users
export const getAllUsers = baseUrl + "api/signIn";
export const getUser = baseUrl + "api/User/";
