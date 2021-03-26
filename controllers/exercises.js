const Exercise = require("../models/exercise");

function index(req, res) {
    Exercise.find({}, function(err, exercises){
        res.render('exercises/index',{exercises});
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
        res.render('exercises/show', {
            exercise,
            exerciseId: req.params.id,
        })
});
};

function edit(req, res) {
    Exercise.findById(req.params.id, function(err, exercise) {
        res.render('exercises/edit', {
            exercise,
            exerciseId: req.params.id,
        })
    })
};

function update(req, res) {
    req.body.done = false;
    Exercise.findByIdAndUpdate(req.params.id, req.body, function(err, exercise) {
        res.redirect(`/exercises/${exercise.id}`)
    })
};

module.exports = {
    index,
    show,
    edit,
    update,
    new: newExercise,
    create,
};