const express = require("express");
const router = express.Router();
const createJob = require("../controllers/jobControllers");

// router.post("/").post(createJob);
router.post("/", createJob);

module.exports = router;
