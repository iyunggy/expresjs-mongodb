const express = require("express");
const router = express.Router();
const {
  createJob,
  getAllJobs,
  getJob,
  deleteJob,
  updateJob
} = require("../controllers/jobControllers");

router.route("/").get(getAllJobs).post(createJob);
router.route("/:id").get(getJob).delete(deleteJob).patch(updateJob);
// router.post("/", createJob);

module.exports = router;
