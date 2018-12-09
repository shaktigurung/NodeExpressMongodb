const express = require('express');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

//Mongoose Database connection
mongoose.connect("mongodb://localhost/books_r_us", { useNewUrlParser: true });
mongoose.Promise = global.Promise;
mongoose.connection.on("Error", err => console.log(err));

//Setup Handle-bars
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

//Body-parser as middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Routes
app.use(require("./routes"));

//Server
app.listen(port, ()=>{
    console.log(`Server is runnning on port ${port}`);
})