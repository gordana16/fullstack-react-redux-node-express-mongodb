const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const config = require("./config/dev");
const Rental = require("./models/rental");
const FakeDb = require("./fake-db");
const rentalRoutes = require("./routes/rentals");
const userRoutes = require("./routes/users");

mongoose.connect(config.DB_URI, { useNewUrlParser: true }).then(() => {
  const fakeDb = new FakeDb();
  fakeDb.pushDataToDb();
});
mongoose.set("useCreateIndex", true); //prevent warning

const app = express();
app.use(bodyParser.json());
app.use("/api/v1/rentals", rentalRoutes);
app.use("/api/v1/users", userRoutes);

const PORT = process.env.port || "3001";
app.listen("3001", () => {
  console.log("I'm running on port", PORT);
});
