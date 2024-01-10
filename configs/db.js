const mongoose = require("mongoose");
const DB_URL =process.env.DB_URL;
const dbConnect = async () => {
  try {
    await mongoose.connect('you mongodb url', {
      dbName: "mini-loan-app",
    });
    console.log("db connected");
  } catch (err) {
    console.log(err);
  }
};

module.exports = dbConnect;
