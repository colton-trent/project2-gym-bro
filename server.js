//require and define the app
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const port = 3050;
require('./config/database');
require('dotenv').config();

const indexRouter = require('./routes/index');
const exercisesRouter = require('./routes/exercises');
const workoutsRouter = require('./routes/workouts');
const journalsRouter = require('./routes/journals');

const app = express();

app.set('view engine', 'ejs');

app.use(morgan('dev'));

app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));
app.use(methodOverride('_method'));

app.use('/', indexRouter);
app.use('/exercises', exercisesRouter);
app.use('/', workoutsRouter);
app.use('/journals', journalsRouter);

app.listen(port, function() {
    console.log(`express is listening on port: ${port}`);
});