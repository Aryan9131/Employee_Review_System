// Import required modules and packages
const express = require('express');
const db = require('./config/mongoose');
const expressEjsLayouts = require('express-ejs-layouts');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('./config/passport-local-strategy');
const MongoStore = require('connect-mongo');
require('dotenv').config();
const DB_URL=process.env.DATABASE_URL;
const SECRET_KEY=process.env.SECRET_KEY;

const path = require('path');

// Create an instance of the Express application
const app = express();
const PORT = process.env.PORT || 8000;

// Middleware for parsing incoming request data
app.use(express.urlencoded());


// Middleware for parsing cookies
app.use(cookieParser());

// Middleware to serve static files from the specified directory
app.use(express.static('./assets'));


//Middleware for using EJS layouts
app.use(expressEjsLayouts);
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

// Set the view engine and views directory
app.set('view engine', 'ejs');
app.set('views', './views');

// Middleware for managing sessions
app.use(session({
    name: "Ers",
    secret: process.env.SECRET_KEY,
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100) // Session timeout duration
    },
    store: MongoStore.create({
        mongoUrl : DB_URL ,
        autoRemove: 'disable'
    })
}));

// Middleware for initializing and using Passport
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);

// Use Express routes defined in the 'routes' module
app.use('/', require('./routes'));

// Start the server and listen on the specified port
app.listen(PORT, (err) => {
    if (err) {
        console.log("Error while running Server: ", err);
        return;
    }
    console.log('Server is running at Port:', PORT );
});
