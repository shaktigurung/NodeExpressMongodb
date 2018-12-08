require('./models/db');

const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

const employeeController = require('./controllers/employeeController');

const app = express();

app.set('views', path.join(--dirname, './../views/'));
app.engine('hbs', exphbs({
    extname: 'hbs', defaultLayout: 'mainLayout', layoutsDir: __dirname + './../views/layouts/'
}));
app.set('view engine', 'hbs');

app.listen(3000, ()=>{
    console.log("Express Server started at port: 3000");
});

app.use('/employee', employeeController);