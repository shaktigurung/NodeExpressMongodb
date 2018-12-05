const express = require("express");
const exphb = require("express-handlebars");
const app = express();

app.engine("handlebars", exphb({defaultLayout: "main"}));
app.set("view engine", "handlebars");

// app.get("/", (req, res)=>{
//     res.render("test");
// });

app.use(require("./routes"));

module.exports = app;