const Exercise = require("../models/exercise");

function index(req, res) {
    Exercise.find({}, function(err, exercises){
        res.render('exercises/index', { exercises});
});
};

function newExercise(req, res) {
    res.render('exercises/new')
};

function create(req, res) {
    Exercise.create(req.body, function(err, exercise) {
        if (err) return res.redirect('/exercises/new');
    res.redirect('/exercises');
});
};

function show(req, res) {
    Exercise.findById(req.params.id, function(err, exercise) {
        res.render('exercises/show', {exercise})
});
}

module.exports = {
    index,
    show,
    new: newExercise,
    create,
};