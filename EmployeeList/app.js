require('./models/db');

const express = require('express');

const employeeController = require('./controllers/employeeController');

const app = express();

app.listen(3000, ()=>{
    console.log("Express Server started at port: 3000");
});

app.use('/employee', employeeController);