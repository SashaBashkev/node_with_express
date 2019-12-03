const path = require("path");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// routes
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const errorCtrl = require("./controllers/error");
// express set
app.set("view engine", "ejs");
// express use
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/admin", adminRoutes);
app.use(shopRoutes);
app.use(errorCtrl.get404);

// Listen
app.listen(3000, () => console.log("Server running on port 3000.."));
