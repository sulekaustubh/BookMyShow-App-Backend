const mongodb = require("mongodb");
const dotenv = require("dotenv");
dotenv.config();

let mongoose = require("mongoose");
const { bookMovieSchema } = require("../models/bookMovie");
const { UserSchema } = require('../models/user')

const mongoURI="mongodb+srv://bms:bms123@bookmyshowDB.1bw2pfo.mongodb.net/bookMovie?retryWrites=true&w=majority"

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("connection established with mongodb server online");
  })
  .catch((err) => {
    console.log("error while connection", err);
  });
let collection_connection = mongoose.model("bookmovietickets", bookMovieSchema);
let user_connection = mongoose.model("User", UserSchema);

exports.connection = collection_connection;
exports.Userconnection = user_connection;


