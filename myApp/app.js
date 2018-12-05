const express = require('express');
const path = require('path');
//Init app
const app = express();
const port = 3000;

//Load View Engine
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'pug');

//Home route
app.get('/', (req, res) => {
    res.render('index',{
        title: 'Articles'
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