const express = require("express");
const bodyParser = require("body-parser");
const minify = require("express-minify");
const compression = require("compression");
require("./db/mongoose");

const app = express();

// middlewares
app.use(bodyParser.json());
app.use(minify());
app.use(compression());

// api
require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server is up !");
});
