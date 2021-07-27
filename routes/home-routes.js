const router = require('express').Router();

app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname + "./public/exercise.html"));
  });

app.get("/stats", (req, res) => {
    console.log('here');
    res.sendFile(path.join(__dirname + "./public/stats.html"));
  });
  
  
module.exports = router;
