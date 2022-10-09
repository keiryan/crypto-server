const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 8000;
const mongoose = require("mongoose");
const Coin = require("./models/coin/coin.schema");
if (process.env.NODE_ENV !== "production") {
  // Load environment variables from .env file in non prod environments
  require("dotenv").config();
}
const db = require("./db");
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
// get, post, put, delete, patch

const todos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

app.get("/coins", (req, res) => {
  Coin.find().then((coins) => {
    res.json(coins);
  });
});

app.post("/add-coin", (req, res) => {
  const coin = new Coin(req.body);
  coin.save((err, coin) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.status(200).send(coin);
  });
});

app.get("/coins/:id", (req, res) => {
  const id = req.params.id;
  Coin.find({name: id}).then((coin) => {
    res.json(coin);
  });
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
