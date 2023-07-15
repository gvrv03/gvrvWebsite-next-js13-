import mongoose, { models } from "mongoose";
const { Schema } = mongoose;

const contactSchema = new Schema(
  {
    name: String,
    subject: String,
    email: String,
    message: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Contact ||
  mongoose.model("Contact", contactSchema);
