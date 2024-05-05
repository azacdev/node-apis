const mongoose = require("mongoose");

const connectToDB = (url) => {
  mongoose
    .connect(url)
    .then(() => console.log("Connected to db..."))
    .catch((err) => console.log(err));
};

module.exports = connectToDB;
