const express = require("express");
const { getAirports, getFlights } = require("../controllers");

const router = express.Router();

router.get("/get-airports", getAirports);
router.post("/get-flights", getFlights);

router.get("/health-status", (req, res) => {
  return res.sendStatus(200);
});

module.exports = router;
