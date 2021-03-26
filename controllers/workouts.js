const Exercise = require('../models/exercise');

function create(req, res) {
    Exercise.findById(req.params.id, function (err, exercise) {
        exercise.workouts.push(req.body);
        exercise.save(function(err) {
            res.redirect(`/journals/${exercise._id}`);
        });
    });
};

module.exports = {
    create,
};