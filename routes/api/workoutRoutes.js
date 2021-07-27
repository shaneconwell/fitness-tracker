const router = require('express').Router();
const db = require('../../models');


router.get("/", (req, res) => {
console.log("here");
  db.Workout.find({})
  .then(dbWorkout => {
    console.log(dbWorkout);
    res.json(dbWorkout);
  })
  .catch(err => {
    res.json(err);
  });
});


// app.get("/range", (req, res) => {
    
    
  //   Workout.aggregate( [
  //       {
  //         $addFields: {
  //           exercises.duration: { $sum: "$homework" } ,
  //           totalQuiz: { $sum: "$quiz" }
  //         }
  //       }

  // });
  
  module.exports = router;
