const router = require('express').Router();
const path = require("path")
const { Workout } = require('../models');

router.get("/workouts", (req, res) => {
  console.log("here");
    Workout.find({})
    .then(dbWorkout => {
      console.log(dbWorkout);
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
  });

    
module.exports = router;
