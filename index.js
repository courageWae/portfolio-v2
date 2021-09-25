const express = require("express"); // creating serve by importing express module
const app = express();
const path = require("path"); // importing the path module to enable routing
const ejs = require("ejs");

app.set('view engine', 'ejs'); // setting the templating engine

app.use(express.static('public')); // creating and public file for all images and css files

app.listen(process.env.PORT || 3000);// server listening port.


// routes
app.get('/', (req, res) => { res.render("index")});
app.get('/experience', (req, res) => { res.render("experience")});
app.get('/projects', (req, res) => { res.render("projects")});
app.get('/skills', (req, res) => { res.render("skills")});

