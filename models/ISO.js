var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ISOSchema = new Schema({
  owner: String,
  item: String,
  photoURL: String,
  ISO: {
    type: Boolean,
    default: true},
});

var ISO = mongoose.model("ISO", ISOSchema);

module.exports = ISO;