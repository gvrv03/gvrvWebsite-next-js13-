import mongoose, { models } from "mongoose";
const { Schema } = mongoose;
const { ObjectId } = mongoose.Schema.Types;

// Define the review schema
const reviewSchema = new mongoose.Schema({
  User: {
    type: ObjectId,
    ref: "User",
  },
  text: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Define the product schema
const productDetailSchema = new Schema(
  {
    addeBy: {
      type: ObjectId,
      ref: "User",
    },
    title: String,
    description: String,
    artical: String,
    images: [String],
    thumbnail: String,
    productOrganization: {
      category: { type: String },
      type: { type: String },
      vendor: { type: String },
      collection: { type: String },
      keywords: { type: String },
    },
    pricing: {
      price: { type: Number, default: 0 },
      comAtPrice: { type: Number, default: 0 },
      costPerItem: { type: Number, default: 0 },
      profit: { type: Number, default: 0 },
      margin: { type: Number, default: 0 },
    },
    reviews: [reviewSchema],
    rating: {
      type: Number,
      min: 1,
      max: 5,
    },
    productID: {
      type: ObjectId,
      ref: "product",
    },
    status: {
      type: String,
      enum: ["active", "draft"],
    },
    views: {
      type: Number,
      default: 1,
    },
  },
  {
    timestamps: true,
  }
);
export default mongoose.models.productDetail ||
  mongoose.model("productDetail", productDetailSchema);
