function index(req, res) {
    res.render('workouts/index');
};

function newWorkout(req, res) {
    res.render('workouts/new')
};
module.exports = {
    index,
    new: newWorkout,
}