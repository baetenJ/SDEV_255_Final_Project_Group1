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



// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'));

// listen for requests
app.listen(3000);

app.get('/', (req, res) => {
    res.sendFile("./views/index.html", {root: __dirname});
});

app.get('/signup', (req, res) => {
    res.render('studentSignUp');
});

app.get('/courseentry', (req, res) => {
    res.render('courseEntry');
});

app.get('/allcourses', (req, res) => {
    res.render('allCourses', { course_name: "Test"});
});

app.post('/allcourses', (req, res) => {
    console.log(req.body.course_name);
    res.send("hi")
});

// 404 page must be at bottom
app.use((req, res) => {
    res.status(404).render('404');
});