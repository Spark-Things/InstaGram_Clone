const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    resetToken: String,
    expireToken: Date,
    pic: {
      type: String,
      default:
        "https://res.cloudinary.com/renishclould/image/upload/v1637058651/default%20profile/default_profile_dxqn9p.jpg",
    },
    username: {
      type: String,
      require: true,
    },
    followers: [{ type: Object, ref: "User" }],
    following: [{type : Object, ref:"User"}]
  },
  { timestamp: true }
);

mongoose.model("User", userSchema);
