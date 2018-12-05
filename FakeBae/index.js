//Just for running server
const mongoose = require("mongoose");
const app = require("./app");
const port = 3000;

mongoose.connect("mongodb://localhost/fakebae", {useNewUrlParser: true});
mongoose.Promise = global.Promise;
mongoose.connection.on("error", console.log);
// mongoose.connect.on("error", err=>console.log(err));

app.listen(port, ()=> console.log( `Server is running on port ${port}`));