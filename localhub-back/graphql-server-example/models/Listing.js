const mongoose = require("mongoose");

const ListingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50
  },
  author: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50
  },
  description: {
    type: String,
    required: true
  }
});

const ListingModel = mongoose.model("local-hub", ListingSchema);

exports.ListingSchema = ListingSchema;
exports.ListingModel = ListingModel;
