const mongoose = require("mongoose");
const DB_URL =process.env.DB_URL;
const dbConnect = async () => {
  try {
    await mongoose.connect('mongodb+srv://shreetikagmm123:shha161729@cluster0.jfmrdce.mongodb.net/?retryWrites=true&w=majority', {
      dbName: "mini-loan-app",
    });
    console.log("db connected");
  } catch (err) {
    console.log(err);
  }
};

module.exports = dbConnect;
