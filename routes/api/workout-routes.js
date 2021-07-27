const router = require('express').Router();
const { Workout } = require('../../models');


app.get("/range", (req, res) => {
    
    
    Workout.aggregate( [
        {
          $addFields: {
            exercises.duration: { $sum: "$homework" } ,
            totalQuiz: { $sum: "$quiz" }
          }
        }

  });
  