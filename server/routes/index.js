var express = require('express');
var router = express.Router();
const connectToDb = require("../db/conn");

/* GET home page. */
router.get('/message', function(req, res, next) {
  res.send({"message":"working?"})
});


router.post("/add", async (req, res, next) => {
  req.body["status"] = false;
  try {
    const db = await connectToDb();
    let result = await db.collection("tasks").insertOne(req.body);
    if (result.acknowledged) {
      res.send({"message": "success"});
    } else {
      res.status(500).send({"message": "failed"});
    }
  } catch (e) {
    console.error('Failed to connect to the database or perform operations', e);
  }
});

module.exports = router;
