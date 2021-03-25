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

module.exports = {
    show,
    delete: deleteExercise,
}