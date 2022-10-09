const mongoose = require("mongoose");
const url = process.env.MONGO_DB;

const connect = mongoose.connect(url);
connect
  .then((db) => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err);
  });

const connection = mongoose.connection;
