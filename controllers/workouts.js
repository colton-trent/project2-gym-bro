const Exercise = require("../models/workout");

function index(req, res) {
    Exercise.find({}, function(err, exercises){
        res.render('workouts/index', { exercises});
});
};

function newWorkout(req, res) {
    res.render('workouts/new')
};

function create(req, res) {
    req.body.weighted = !!req.body.weighted;

    Exercise.create(req.body, function(err, exercise) {
        if (err) return res.redirect('/workouts/new');
    res.redirect('/workouts');
});
};


module.exports = {
    index,
    new: newWorkout,
    create,
}