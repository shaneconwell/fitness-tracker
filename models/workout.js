const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: {
        type: String,
      },
      name: {
        type: String,
      },
      duration: {
        type: Number,
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      distance: {
        type: Number,
      },
    },
  ],
});

workoutSchema.methods.totalDuration = function() {
  Workout.aggregate( [
   {
     $addFields: {
       totalDuration: { $sum: "$duration" } ,
       
     }
   }
  ])
};


const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
