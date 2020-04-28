const { Listing } = require("../models/Listing");
const express = require("express");
const router = express();
const { saveOne, findAll } = require("../mongo-db/mongo");

router.get("/", async (req, res) => {
  const books = await BookModel.find().sort("name");
  res.json(books);
});

router.post("/", async (req, res) => {
  let result = saveOne(req.body);
  res.json(result);
});

module.exports = router;
