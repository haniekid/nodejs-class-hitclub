const express = require("express");
const path = require("path");
const router = require("./src/routes");
const ejs = require("ejs");

const app = express();
const port = 3000;

// chuyển dữ liệu từ server ra thẻ form
app.use(express.urlencoded()); // form => url
app.use(express.json());

app.set("views", path.join(__dirname, "./src/views"));
app.set("view engine", "ejs");
app.use("/static", express.static(path.join(__dirname, "src/public")));
app.use(router);

app.listen(port, () => {
  console.log("http://localhost:" + port);
});
