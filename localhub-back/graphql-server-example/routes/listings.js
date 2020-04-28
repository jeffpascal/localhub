const { Listing } = require("../models/Listing");
const express = require("express");
const router = express();
const { saveOne, findAll } = require("../mongo-db/mongo");

router.get("/", async (req, res) => {
  const listings = await findAll();
  res.json(await listings);
});

router.post("/", async (req, res) => {
  let result = await saveOne(req.body);
  res.json(await result);
});

module.exports = router;
