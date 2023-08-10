const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send('hello wrld')
});

app.post("/", (req, res) => {
  console.log(req)
  res.json({msg: 'data receive', data: req.body})
})

app.listen(5100, (error) => {
  console.log("server running");
});
