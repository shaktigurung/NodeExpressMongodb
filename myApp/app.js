const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/nodemyApp');
let db = mongoose.connection;
//Check connection
db.once('open', function(){
    console.log('Connected to MongoDB');
});

//Check for DB errors
db.on('error', function(err){
    console.log(err);
});

//Init app
const app = express();
const port = 3000;

//Bring in models
let Article = require('./models/article');
//Load View Engine
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'pug');

//Home route
app.get('/', (req, res) => {
    Article.find({}, function(err, articles){
        if(err){
            console.log(err);
        } else {
        res.render('index',{
            title: 'Articles',
            articles: articles
        });
        }
    });
   
});

//Add Route
app.get('/articles/add', (req, res)=>{
    res.render('add_article',{
        title: 'Add Article'
    });
})


//Start Server
app.listen(port, () => {
    console.log(`Server is running on port ${port}!`);
});