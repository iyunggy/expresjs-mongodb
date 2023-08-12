
const Job = require('../models/jobModel')

// create job
const createJob = async (req, res) => {
  const { company, position } = req.body;
  try {
    const job = await Job.create({ company, position });
    res.status(201).json({ job });
  } catch (error) {
    console.log(error)
    res.status(500).json({ msg: "server error" });
  }
};


module.exports = createJob
