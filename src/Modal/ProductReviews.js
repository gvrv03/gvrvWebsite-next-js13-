import mongoose, { models } from "mongoose";
const { Schema } = mongoose;
const { ObjectId } = mongoose.Schema.Types;

// Define the product schema
const productReviewSchema = new Schema(
  {
    productID: {
      type: ObjectId,
      ref: "productDetail",
    },
    stars: { type: Number, min: 1, max: 5 },
    userID: { type: ObjectId, ref: "User" },
    text: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
export default mongoose.models.productReview ||
  mongoose.model("productReview", productReviewSchema);
