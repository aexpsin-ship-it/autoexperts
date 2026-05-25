import mongoose from "mongoose";
import slugify from "slugify";

const BlogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    slug: {
      type: String,
      unique: true,
    },

    description: {
      type: String,
      required: true,
    },

    content: {
      type: String,
      required: true,
    },

    contentBlocks: [
      {
        text: {
          type: String,
          default: "",
        },
        image: {
          type: String,
        },
      },
    ],

    image: {
      type: String,
    },

    contentImages: [
      {
        type: String,
      },
    ],

    category: {
      type: String,
      default: "General",
    },

    tags: [String],

    author: {
      type: String,
      default: "Admin",
    },

    published: {
      type: Boolean,
      default: true,
    },

    averageRating: {
      type: Number,
      default: 0,
    },

    totalRatings: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

BlogSchema.pre("save", function (next) {
  if (!this.slug) {
    this.slug = slugify(this.title, {
      lower: true,
      strict: true,
    });
  }

  next();
});

export default mongoose.models.Blog ||
  mongoose.model("Blog", BlogSchema);