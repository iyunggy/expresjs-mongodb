const express = require("express");
const router = express.Router();
const {
  createJob,
  getAllJobs,
  getJob,
  deleteJob,
} = require("../controllers/jobControllers");

router.route("/").get(getAllJobs).post(createJob);
router.route("/:id").get(getJob).delete(deleteJob);
// router.post("/", createJob);

module.exports = router;
