// require("./config/config");
// require("./db/mongoose");

// const path = require("path");
// const http = require("http");
// const fs = require("fs");
// const express = require("express");
// const compression = require("compression");
// const minify = require("express-minify");
// const _ = require("lodash");
// let moment = require("moment");

// if ("default" in moment) {
//   moment = moment.default;
// }

// const { Users } = require("./utils/users");
// const { User } = require("./models/user");
// const { authenticate } = require("./middleware/authenticate");

// const bodyParser = require("body-parser");

// const app = express();
// const users = new Users();
// app.use(compression());
// app.use(minify());
// app.use(bodyParser.json());

// /** ************************************************************* */
// /* Authentication                                                 */
// /** ************************************************************* */

// /* Log in */

// app.post("/users/login", async (req, res) => {
//   const body = _.pick(req.body, ["email", "password"]);

//   try {
//     const user = await User.findByCredentials(body.email, body.password);
//     const token = await user.generateAuthToken();
//     res.header("x-auth", token).send({
//       _id: user._id,
//       email: user.email,
//       username: user.username,
//       token
//     });
//   } catch (error) {
//     res.status(400).send(error);
//   }
// });

// app.get("/users/me", authenticate, (req, res) => {
//   res.send(req.user);
// });

// /* Remove token on log out */

// app.delete("/users/me/token", authenticate, async (req, res) => {
//   try {
//     await req.user.removeToken(req.token);
//     res.status(200).send();
//   } catch (error) {
//     res.status(400).send(error);
//   }
// });

// /* ************************************************************** */
// /* Serving App with Client-side routing                           */
// /* ************************************************************** */

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log("Server is up !");
// });

// module.exports = { app };

const express = require("express");
const keys = require("./config/keys");
const bodyParser = require("body-parser");
const minify = require("express-minify");
const compression = require("compression");
require("./db/mongoose");

const app = express();

app.use(bodyParser.json());
app.use(minify());
app.use(compression());

require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server is up !");
});
