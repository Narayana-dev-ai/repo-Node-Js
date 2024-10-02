const express = require("express");
const routes = express.Router();

routes.get("/", (req, res) => {
  res.send("Birds home page");
});

routes.get("/about", (req, res) => {
  res.send("About birds");
});

routes.post("/card", (req, res) => {
  console.log("body: ", req.query);
  res.send("Suucess !!");
});

routes.put("/card", (req, res) => {
  res.json({ name: "Narayana", age: "23" }).status(200);
});
module.exports = routes;
