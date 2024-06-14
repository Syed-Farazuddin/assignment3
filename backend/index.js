const express = require("express");
require("./db/db");
const cors = require("cors");
const { register, login } = require("./controllers/Controllers.js");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.post("/login", login);

app.post("/register", register);

app.listen(4000, () => {
  console.log("Server started on port 4000");
});
