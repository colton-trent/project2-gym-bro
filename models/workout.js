const mongoose= require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    workoutDate: {
        type: Date,
        required: true,
    },
    reps: Number,
    weight: Number,
    distance: Number,
    duration: Number,
});

const exerciseSchema = new Schema({
    exerciseName: {
        type: String,
        required: true,
    },
    measurementType: {
        type: String,
    },
    weighted: {
        type: Boolean,
        default: false,
    },
    // workouts: [workoutSchema],
}, {
    timestamps: true,
});

module.exports = mongoose.model('Exercise', exerciseSchema);