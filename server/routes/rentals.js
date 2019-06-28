const express = require("express");
const Rental = require("../models/rental");
const User = require("../models/user");
const UserCtrl = require("../controllers/user");
const { normalizeErrors } = require("../helpers/mongoose");

const router = express.Router();

router.get("/secret", UserCtrl.authMiddleware, (req, res) => {
  res.json({ secret: true });
});

router.get("/:id", (req, res) => {
  const rentalId = req.params.id;
  Rental.findById(rentalId)
    .populate("user", "username -_id")
    .populate("bookings", "startAt endAt -_id")
    .exec((err, foundRental) => {
      if (err) {
        res.status(422).send({
          errors: [{ title: "Rental Error", detail: "Could not find rental" }]
        });
      }
      res.json(foundRental);
    });
});

router.post("", UserCtrl.authMiddleware, (req, res) => {
  const user = res.locals.user;

  const rental = new Rental(req.body);
  rental.user = user;
  rental.save((err, newRental) => {
    if (err) {
      return res.status(422).send({ errors: normalizeErrors(err.errors) });
    }
    User.updateOne({ _id: user.id }, { $push: { rentals: rental } }, () => {});
    return res.json({ newRental });
  });
});

router.get("", (req, res) => {
  const city = req.query.city;
  const query = city ? { city: city.toLowerCase() } : {};

  Rental.find(query)
    .select("-bookings")
    .exec((err, foundRentals) => {
      if (err) {
        return res.status(422).send({ errors: normalizeErrors(err.errors) });
      }
      if (city && foundRentals.length === 0) {
        return res.status(422).send({
          errors: [
            {
              title: "No rentals found",
              detail: `There are not rentals for ${city}`
            }
          ]
        });
      }
      return res.json(foundRentals);
    });
});

module.exports = router;
