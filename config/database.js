const mongoose = require("mongoose");
// to feed 'env' inside process-> Need to use 'dotenv' Library
require("dotenv").config();
// through 'dotenv', whatever is stored in 'env' will be stored in 'process'

const dbConnect = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("DB Connection is Successful."))
    .catch((error) => {
      console.log("Connection madhe Error: ");
      console.error(error.message);
      process.exit(1);
    });
};

module.exports = dbConnect;
