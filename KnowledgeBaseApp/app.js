const express = require('express');
const app = express();
//const port = 3001;

app.get('/', function(req, res){
    res.send('Hello World');
});

app.listen(3000, function(){
    console.log("Server is running");
});

