const Exercise = require('../models/exercise');

function show(req, res) {
    Exercise.findById(req.params.id, function(err, exercise) {
        res.render('journals/index', {exercise});
    });
};

function deleteExercise(req, res) {
    Exercise.findByIdAndDelete({_id:req.params.id}).exec(function(err, exercise) {
    res.redirect('/exercises');
});
};

// function edit(req, res) {
//     Exercise.findById(req.params.id, function(err, exercise) {
//         res.render('journals/edit', {
//             exercise,
//             exerciseId: req.params.id,
//         })
//     })
// };

// function update(req, res) {
//     req.body.done = false;
//     Exercise.findOneAndUpdate(req.body, function(err, workout) {
//         res.redirect(`/journals/${workout.id}`)
//     })
// };

module.exports = {
    show,
    // update,
    delete: deleteExercise,
};