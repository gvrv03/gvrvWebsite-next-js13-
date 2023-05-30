import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    firebaseID: {
      type: String,
      required: true,
      unique: true,
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
    userProfile: {
      type: String,
      required: true,
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
