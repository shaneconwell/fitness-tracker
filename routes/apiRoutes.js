const router = require('express').Router();
const { Workout } = require('../models');

router.get("/workouts", (req, res) => {

    Workout.find({})
    .then(dbWorkout => {
      console.log(dbWorkout);
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
  });

  router.put("/workouts/:id", (req, res) => {

      Workout.findOneAndUpdate(
        {_id: req.params.id},
        {
          $push: {exercises: req.body}
        },
        {new: true})
      .then(dbWorkout => {
        console.log(dbWorkout);
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
    });

  router.post("/workouts", ({ body }, res) => {
    console.log('POST');
      Workout.create(body)
      .then(dbWorkout => {
        console.log(dbWorkout);
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
    });

    router.get("/workouts/range", (req, res) => {
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
