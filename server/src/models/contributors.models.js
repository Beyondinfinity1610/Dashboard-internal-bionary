import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  VTOPusername: {
    type: String,
    required: true,
  },
  RollNo: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  projects: [
    {
      type: Schema.Types.ObjectId,
      ref: "projects",
    },
  ],
  isTopContributor: {
    type: Boolean,
    default: false,
  },
  department: {
    type: String,
    required: true,
  },
  topic: {
    type: String,
    required: true,
  },
});

userSchema.plugin(mongooseAggregatePaginate);
export const users = mongoose.model("users", contributorSchema);
