// npm init -- to create package.json file -- I kept all default values
// npm install express
// npm install
// npm install ejs
// npm install lodash
// npm install morgan
// Run -- nodemon app.js -- Ctrl + C -- to exit


const express = require('express');
const morgan = require('morgan');

// express app

const app = express();

// register view engine
app.set('view engine', 'ejs');

// listen for requests
app.listen(3000);

// middleware & static files
app.use(express.static('public'));
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.render('index', { title: 'Home'});
});