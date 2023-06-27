import mongoose, { models } from "mongoose";
const { Schema } = mongoose;
const { ObjectId } = mongoose.Schema.Types;

// Define the product schema
const productDetailSchema = new Schema(
  {
    addeBy: {
      type: ObjectId,
      ref: "User",
      required: true,
    },
    title: { type: String, required: true },
    description: { type: String, required: true },
    artical: { type: String, required: true },
    images: [String],
    thumbnail: { type: String, required: true },
    productOrganization: {
      category: { type: String, required: true },
      type: { type: String, required: true },
      vendor: { type: String, required: true },
      collection: { type: String, required: true },
      keywords: { type: String, required: true },
    },
    pricing: {
      price: { type: Number, default: 0, required: true },
      comAtPrice: { type: Number, default: 0, required: true },
      costPerItem: { type: Number, default: 0, required: true },
      profit: { type: Number, default: 0, required: true },
      margin: { type: Number, default: 0, required: true },
    },
    reviews: [
      {
        type: ObjectId,
        ref: "productReview",
      },
    ],
    productID: {
      type: ObjectId,
      ref: "product",
    },
    status: {
      required: true,
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
