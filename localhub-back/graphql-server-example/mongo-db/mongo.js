const mongoose = require("mongoose");
const { ListingModel } = require("../models/Listing");

mongoose
  .connect(
    "mongodb+srv://root:root@cluster0-jivnd.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Running mongodb"))
  .catch(err => console.log(err));

const findAll = async function getListings() {
  let books = await ListingModel.find().sort("name");
  return books;
};

const saveOne = async function saveListing(toSaveListing) {
  let listing = new ListingModel({
    name: toSaveListing.name,
    author: toSaveListing.author,
    description: toSaveListing.description
  });
  listing = await listing.save();
};

module.exports.saveOne = saveOne;
module.exports.findAll = findAll;
