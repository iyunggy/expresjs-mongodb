const Job = require("../models/jobModel");

// get all job
const getAllJobs = async (req, res) => {
  const jobs = await Job.find({});
  res.status(200).json({ jobs });
};

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
    res.status(500).json({ msg: "server error" });
  }
};

module.exports = { createJob, getAllJobs, getJob };
