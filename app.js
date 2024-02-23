// npm init -- to create package.json file -- I kept all default values
// npm install express
// npm install
// npm install ejs
// npm install lodash
// npm install morgan
// Run -- nodemon app.js -- Ctrl + C -- to exit


const express = require('express');
var mongoose = require("mongoose"); 
var bodyParser = require("body-parser");

// express app
const app = express();

// calling form.js from models 
var Form = require("./models/form"); 

// database 
mongoose.connect("mongodb://localhost/courseentry",{ 
    useNewUrlParser: true, 
    useUnifiedTopology: true
}); 

// register view engine
app.set('view engine', 'ejs');



// middleware & static files
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true})); 

// listen for requests
app.listen(3000);

//index page
app.get('/', (req, res) => {
    res.render('index');
});

//student course signup page
app.get('/signup', (req, res) => {
    res.render('studentSignUp');
});

//course entry page
app.get('/courseentry', (req, res) => {
    res.render('courseEntry');
});

// form submission 
app.get('/result',(req,res)=>{ 
    res.render('result'); 
});

//creating form
app.post("/courseentry",function(req,res){ 
    var courseName=req.body.course_name; 
    var courseDescription=req.body.course_description; 
    var courseSubject = req.body.course_subject
    var courseCredit = req.body.course_credit
    var f={courseName: courseName, courseDescription: courseDescription, courseSubject: courseSubject, courseCredit: courseCredit}; 
    Form.create(f,function(err,newlyCreatedForm){ 
        if(err) 
        { 
            console.log(err); 
        }else{ 
            res.redirect("/result"); 
        } 
    }); 
});

//course edit page
app.get('/allcourses', (req, res) => {
    res.render('allCourses', { course_name: "Test"});
});


// 404 page must be at bottom
app.use((req, res) => {
    res.status(404).render('404');
});