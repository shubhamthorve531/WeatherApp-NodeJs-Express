const express = require('express');
const app = express();
const favicon = require('serve-favicon')
const path = require('path')

//Middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

//import route
const weatherRoute = require("./routes/weather");

//middleware routes
app.use('/', weatherRoute);


//Use View Engine
app.set('view engine', 'ejs');

const PORT = process.env.PORT || 80;

// Start the server on port 80
app.listen(PORT, () =>
    console.log(`Node server running on port ${PORT}`));