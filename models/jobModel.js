const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema(
  {
    company: String,
    position: String,
    jobStatus: {
      type: String,
      enum: ["inteview", "declined", "pending"],
      default: "pending",
    },
    jobType: {
      type: String,
      enum: ["full-time", "part-time", "internship"],
      default: "full-time",
    },
    jobLocations: {
      type: String,
      default: "my-city",
    },
  },
  { timestamps: true }
);

const Job = mongoose.model('Job', JobSchema)

module.exports = Job
