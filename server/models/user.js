const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
    },
    avatarId: {
      type: String,
      default: "",
      required: false,
    },
    appearanceName: {
      type: String,
      default: "",
      required: false,
    },
    about: {
      type: String,
      default: "",
      required: false,
    },
    website: {
      type: String,
      default: "",
      required: false,
    },
    socials: {
      facebook: {
        type: String,
        default: "",
      },
      instagram: {
        type: String,
        default: "",
      },
      tiktok: {
        type: String,
        default: "",
      },
      patreon: {
        type: String,
        default: "",
      },
      youtube: {
        type: String,
        default: "",
      },
      snapchat: {
        type: String,
        default: "",
      },
    },
    customLinks: [
      {
        appearAs: {
          type: String,
          required: true,
        },
        linkTo: {
          type: String,
          required: true,
        },
        subtext: {
          type: String,
          required: false,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
