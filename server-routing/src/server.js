const express = require("express");
const routes = require("./routes");

const app = express();

app.use("/app", routes);

app.listen(8000, () => {
  console.log("app is running on port 8000");
});
