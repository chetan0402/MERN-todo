var express = require('express');
var router = express.Router();
const connectToDb = require("../db/conn");

/* GET home page. */
router.get('/message', function(req, res, next) {
  res.send({"message":"working?"})
});

router.post("/getAll", async (req, res, next) => {
  try {
    const db = await connectToDb();
    let result = await db.collection("tasks").find({}).toArray();
    res.send(result);
  } catch (e) {
    console.error('Failed to connect to the database or perform operations', e);
  }
})


router.post("/add", async (req, res, next) => {
  req.body["status"] = false;
  try {
    const db = await connectToDb();
    let result = await db.collection("tasks").insertOne(req.body);
    if (result.acknowledged) {
      res.send({"id": result._id,"task": req.body.task, "status": req.body.status});
    } else {
      res.status(500).send({"message": "failed"});
    }
  } catch (e) {
    console.error('Failed to connect to the database or perform operations', e);
  }
});

router.post("/change", async (req, res, next) => {
  try {
    const db = await connectToDb();
    let result = await db.collection("tasks").updateOne({_id: req.body.id}, {$set: {task: req.body.task}});
    if (result.acknowledged) {
      res.send({"id": result.id});
    } else {
      res.status(500).send({"message": "failed"});
    }
  } catch (e) {
    console.error('Failed to connect to the database or perform operations', e);
  }
})

router.post("/update", async (req, res, next) => {
  try {
    const db = await connectToDb();
    let result = await db.collection("tasks").updateOne({_id: req.body.id}, {$set: {status: req.body.status}});
    if (result.acknowledged) {
      res.send({"id": result.id});
    } else {
      res.status(500).send({"message": "failed"});
    }
  } catch (e) {
    console.error('Failed to connect to the database or perform operations', e);
  }
})

router.post("/delete", async (req, res, next) => {
  try {
    const db = await connectToDb();
    let result = await db.collection("tasks").deleteOne({_id: req.body.id});
    if (result.acknowledged) {
      res.send({"id": result.id});
    } else {
      res.status(500).send({"message": "failed"});
    }
  } catch (e) {
    console.error('Failed to connect to the database or perform operations', e);
  }
})

module.exports = router;
