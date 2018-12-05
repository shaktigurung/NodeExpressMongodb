const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');


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

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

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
});

//Add Submit post
app.post('/articles/add', (req, res)=>{
    console.log('submitted');
    // let article = new Article();
    // article.title = req.body.title;
    // article.author = req.body.author;
    // article.body = req.body.body;

    // article.save(function(err){
    //     if(err){
    //         console.log(err);
    //         return;
    //     }else{
    //         res.redirect('/');
    //     }
    // });
});

//Start Server
app.listen(port, () => {
    console.log(`Server is running on port ${port}!`);
});