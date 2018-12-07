const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect("mongodb://localhost/productapp", { useNewUrlParser: true });
mongoose.Promise = global.Promise;
mongoose.connection.on("error", console.log);

const port = 3000;

// app.get("/", (req, res)=>{
//     res.send("Hello World again wow. Good to see you running!");
// });


app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});