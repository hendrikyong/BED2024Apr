const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/", (req, res) => {
  res.send("Got a POST request");
});

app.put("/", (req, res) => {
  res.send("Got a PUT request");
});

app.delete("/", (req, res) => {
  res.send("Got a DELETE request");
});

app.use(express.static(".."));

app.listen(port, () => {
  console.log(`Express app listening on port ${port}`);
});
