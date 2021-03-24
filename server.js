//require and define the app
const express = require('express');
const morgan = require('morgan');
const port = 3050;
require('./config/database');
require('dotenv').config();

const indexRouter = require('./routes/index');
const workoutsRouter = require ('./routes/workouts');

const app = express();

app.set('view engine', 'ejs');

app.use(morgan('dev'));

app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));

app.use('/', indexRouter);
app.use('/workouts', workoutsRouter);

app.listen(port, function() {
    console.log(`express is listening on port: ${port}`);
});