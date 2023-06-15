import mongoose, { models } from "mongoose";
const { Schema } = mongoose;
const { ObjectId } = mongoose.Schema.Types;

// Define the comment schema
const commentSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  User: {
    type: ObjectId,
    ref: "User",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// Define the blog schema
const blogSchema = new Schema(
  {
    title: String,
    category: [String],
    author: {
      type: ObjectId,
      ref: "User",
    },
    image: String,
    description: String,
    keywords: String,
    artical: String,
    views: {
      type: Number,
      default: 1,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    comments: [commentSchema], // Embedding comments within the blog schema
  },
  {
    timestamps: true,
  }
);
export default mongoose.models.blog || mongoose.model("blog", blogSchema);
