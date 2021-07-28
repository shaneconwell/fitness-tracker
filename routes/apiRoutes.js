const router = require("express").Router();
const { Workout } = require("../models");



router.get("/workouts", (req, res) => {
  Workout.aggregate([
    { $addFields: { totalDuration: { $sum: "$exercises.duration" } } },
  ]).then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.put("/workouts/:id", (req, res) => {
  Workout.findOneAndUpdate(
    { _id: req.params.id },
    {
      $push: { exercises: req.body },
    },
    { new: true }
  )
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post("/workouts", ({ body }, res) => {
  Workout.create(body)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/workouts/range", (req, res) => {
  Workout.aggregate([
    { $addFields: { totalDuration: { $sum: "$exercises.duration" } } },
  ]).then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
