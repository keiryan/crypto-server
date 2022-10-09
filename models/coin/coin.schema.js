const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const coinSchema = new Schema({
  date: Date,
  amount: Number,
  price: Number,
  name: String,
});

module.exports = mongoose.model("Coin", coinSchema);
