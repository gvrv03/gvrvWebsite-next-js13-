import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    gender: {
      type: String,
      default: "N/A",
    },
    email: {
      type: String,
      default: "N/A",
    },
    phoneNo: {
      type: String,
      default: "N/A",
    },
    image: {
      type: String,
    },
    password: {
      type: String,
    },
    role: {
      type: String,
      default: "user",
      enum: ["user", "admin", "root"],
    },
    notification: {
      Whatsapp: {
        type: String,
        default: false,
      },
      SMS: {
        type: String,
        default: false,
      },
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.User || mongoose.model("User", userSchema);
