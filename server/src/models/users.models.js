import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

/*_id string pk
  Name string
  VTOPusername string
  RollNo string
  password string
  techStack array[]
  projects objectId[] projects
  activityLog [{month: string,commitsDone: int,pullRequests: int,issuesResolved: int}]
  isTopContributer bool*/

const activitySchema = new mongoose.Schema({
  month: { type: String, required: true },
  commitsDone: { type: Number, required: true },
  pullRequests: { type: Number, required: true },
  issuesResolved: { type: Number, required: true },
});

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
  techstack: {
    type: [String],
    required: true,
  },
  projects: [
    {
      type: Schema.Types.ObjectId,
      ref: "projects",
    },
  ],
  activityLog: [activitySchema],
  isTopContributor: {
    type: Boolean,
    default: false,
  },
});

userSchema.pre("save", async function (next) {
  if (!this.modified("password")) return next();
  this.password = bcrypt.hash(this.password, 10);

  next();
});

userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.accessTokenGenerator = async function () {
  jwt.sign(
    {
      _id: this._id,
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
  );
};

userSchema.methods.refreshTokenGenerator = async function () {
  jwt.sign(
    {
      _id: this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: process.env.REFRESH_TOKEN_EXPIRY }
  );
};

userSchema.plugin(mongooseAggregatePaginate);
export const users = mongoose.model("users", userSchema);
