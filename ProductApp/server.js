const express = require('express');
const mongoose = require('mongoose');
//const bodyParser = require('body-parser');

const app = express();

// //DB config
// const db = require("./config/keys").mongoURI;

// //Connect to Mongo
// mongoose.connect(db)
//     .then(()=> console.log("MongoDB connected..."))
//     .catch(err => console.log(err));

const db = "mongodb://127.0.0.1/productapp";
mongoose.connect(db, ()=>{
    console.log("Database connected..");
});
mongoose.Promise = global.Promise;
mongoose.connection.on("error", console.log);

const port = 3000;

app.get("/", (req, res)=>{
    //let product = db.myProduct.find();
    res.send("Hello World again wow. Good to see you running!");
  
});

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});