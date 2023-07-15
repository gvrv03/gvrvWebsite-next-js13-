import baseUrl from "./baseUrl";

// Auth
export const SignUpURL = baseUrl + "api/auth/SignUp";

// Products
export const getProductsURL = baseUrl + "api/products";
export const addProductReviewURL = baseUrl + "api/ProductReview?productID=";
export const savedProductToFavoriteURL = baseUrl + "api/ProductSaved";
export const checkSavedProductURL = baseUrl + "api/CheckProductSaved";
// {
//     "queryObject": {},
//     "skip": 0,
//     "limit": 0,
//     "sortingObj": {}
//   }

// Payment
export const createOrderURL = baseUrl + "api/PaymentGateway/CreateOrder";

export const downloadProductURL = baseUrl + "api/ProductDown";
export const getSingleProductURL = baseUrl + "api/products/Product/";

// Blogs
export const getAllBlogsURL = baseUrl + "api/blogs";
export const getSingleURL = baseUrl + "api/blogs/Post/";

// Users
export const getAllUsers = baseUrl + "api/signIn";
export const getUser = baseUrl + "api/User/";

//Favourite

//Contact
export const ContactURL = baseUrl + "api/contact";
