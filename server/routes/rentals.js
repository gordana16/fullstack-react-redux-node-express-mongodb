const express = require("express");
const Rental = require("../models/rental");
const UserCtrl = require("../controllers/user");

const router = express.Router();

router.get("/secret", UserCtrl.authMiddleware, (req, res) => {
  res.json({ secret: true });
});
router.get("", (req, res) => {
  Rental.find({})
    .select("-bookings")
    .exec((err, foundRentals) => {
      res.json(foundRentals);
    });
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

module.exports = router;
