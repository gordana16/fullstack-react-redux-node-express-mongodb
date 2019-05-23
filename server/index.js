const express = require("express");
const mongoose = require("mongoose");
const config = require("./config/dev");
const Rental = require("./models/rental");
const FakeDb = require("./fake-db");
const rentalRoutes = require("./routes/rentals");

mongoose.connect(config.DB_URI, { useNewUrlParser: true }).then(() => {
  const fakeDb = new FakeDb();
  fakeDb.pushRentalsToDb();
});
const app = express();
app.use("/api/v1/rentals", rentalRoutes);

const PORT = process.env.port || "3001";
app.listen("3001", () => {
  console.log("I'm running on port", PORT);
});
