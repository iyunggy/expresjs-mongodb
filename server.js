const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();
const app = express();

const jobRouter = require('./routers/jobRouter')

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello wrld");
});

app.post("/", (req, res) => {
  console.log(req);
  res.json({ msg: "data receive", data: req.body });
});

app.use('/api/v1/jobs', jobRouter)

app.use("*", (req, res) => {
  res.status(400).json({ msg: "not found" });
});

app.use((err, req, res, next) => {
  res.status(500).json({msg: 'something went wrong'})
});

const port = process.env.PORT || 5100;

// app.listen(port, (error) => {
//   console.log(process.env.MONGO_URL)
//   const mongo = mongoose.connect(process.env.MONGO_URL);
//   console.log(mongo)
//   console.log(`server running on PORT ${port}`);
// });

try {
  mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`server running on POST ${port}`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
