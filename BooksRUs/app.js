const express = require('express');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.listen(port, ()=>{
    console.log(`Server is runnning on port ${port}`);
})