const express = require('express');
const app = express();
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');

var multer = require('multer');
const {getHomePage} = require('./routes/index');
//const {getCategoryPage} = require('./routes/category');
const {signUp, signUpPage} = require('./routes/sign-up');
const {write, writePage, getCategoryPage, categoryPage} = require('./routes/write');
const {logIn, logInPage} = require('./routes/login');
const {addCategory, addCategoryPage} = require('./routes/addCategory');
//const {addPlayerPage, addPlayer, deletePlayer, editPlayer, editPlayerPage} = require('./routes/player');
const port = 3000;
// create connection to database
// the mysql.createConnection function takes in a configuration object which contains host, user, password and the database name.
const db = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: 'q1w2e3r4!',
    database: 'socka'
});

// connect to database
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database!');
});
global.db = db;

// configure middleware
app.set('port', process.env.port || port); // set express to use this port
app.set('views', __dirname + '/views'); // set express to look in this folder to render our view
app.set('view engine', 'ejs'); // configure template engine
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // parse form data client
app.use(express.static(path.join(__dirname, 'public'))); // configure express to use public folder
app.use(fileUpload()); // configure fileupload
// routes for the app

app.get('/write/:name', writePage);

app.get('/addCategory', addCategoryPage);
app.get('/category', getCategoryPage);
app.get('/', getHomePage);
app.get('/write', writePage);
app.get('/write', getCategoryPage);
app.get('/sign-up', signUpPage);
app.get('/login', logInPage);
//app.get('/addCategory', function(req,res) {
//	res.redirect('addCategory.ejs');
//});
app.post('/write/:name', write);
app.post('/login', logIn);
app.post('/category', addCategory);
app.post('/sign-up', signUp);
//app.get('*',getHomePage);
//console.log('Input:: name='+getHomePage.body.name+' age='+ req.body.email +' city='+ req.body.password + '');

/*

app.get('/edit/:id', editPlayerPage);
app.get('/delete/:id', deletePlayer);

app.post('/edit/:id', editPlayer);
*/

// set the app to listen on the port
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
