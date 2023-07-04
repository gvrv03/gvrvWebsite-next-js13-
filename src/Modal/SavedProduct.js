import mongoose, { models } from "mongoose";
const { Schema } = mongoose;
const { ObjectId } = mongoose.Schema.Types;

// Define the Saved Product schema
const savedProductSchema = new Schema(
  {
    productID: {
      type: ObjectId,
      ref: "productDetail",
    },
    userId: { type: ObjectId, ref: "User", required: true },
  },
  {
    timestamps: true,
  }
);
export default mongoose.models.SavedProduct ||
  mongoose.model("SavedProduct", savedProductSchema);
