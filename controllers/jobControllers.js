const Job = require("../models/jobModel");

// get all job
const getAllJobs = async (req, res) => {
  const jobs = await Job.find({});
  res.status(200).json({ jobs });
};

// get detail
const getJob = async (req, res) => {
  const { id } = req.params;
  const job = await Job.findById(id);
  if (!job) {
    return res.status(400).json({ msg: `no job with id ${id}` });
  }
  res.status(200).json({ job });
};

// create job
const createJob = async (req, res) => {
  const { company, position } = req.body;
  try {
    const job = await Job.create({ company, position });
    res.status(201).json({ job });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "server error" });
  }
};

// delete job
const deleteJob = async (req, res) => {
  const { id } = req.params;
  const removeJob = Job.findByIdAndDelete(id);
  if (!removeJob) {
    return res.status(400).json({ msg: `no job with id ${id}` });
  }
  res.status(200).json({ msg: "job delete" });
};

const updateJob = async (req, res) => {
  const { id } = req.params;
  const updateJob = await Job.findByIdAndUpdate(id, req.body, { new: true });
  if (!updateJob) {
    return res.status(404).json({ msg: `no job with id ${id}` });
  }
  res.status(200).json({ msg: "job modified", job: updateJob });
};

module.exports = { createJob, getAllJobs, getJob, deleteJob , updateJob};
