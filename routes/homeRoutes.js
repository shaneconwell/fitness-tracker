const router = require('express').Router();
const path = require("path")
const { Workout } = require('../models');

router.get("/api/workouts", (req, res) => {
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

  router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "./public/index.html"));
  });

  router.get("/exercise", (req, res) => {
    console.log(__dirname);
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });

router.get("/stats", (req, res) => {
    console.log(__dirname);
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });
  
  
module.exports = router;
