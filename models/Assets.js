var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var AssetsSchema = new Schema({
  owner: String,
  item: String,
  photoURL: String,
  Asset: {
      type: Boolean,
      default: true}
});

var Assets = mongoose.model("Assets", AssetsSchema);

module.exports = Assets;