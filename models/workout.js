const mongoose= require('mongoose');
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    exerciseName: {
        type: String,
        required: true,
    },
    measurement: {
        type: String,
    },
    weighted: {
        type: Boolean,
        default: false,
    },
    workouts: [workoutSchema],
}, {
    timestamps: true,
});

module.exports = mongoose.model('Exercise', exerciseSchema);