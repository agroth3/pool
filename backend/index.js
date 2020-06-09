const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");

const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/api/hello", (req, res) => {
  res.send({ message: "Hello world" });
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("../frontend/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "frontend", "build", "index.html"));
  });
}

app.listen(port, () => {
  console.log("listening on port ", port);
});
