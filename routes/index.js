const express = require("express");
const { getAirports } = require("../controllers");

const router = express.Router();

router.get("/get-airports", getAirports);

router.get("/health-status", (req, res) => {
  return res.sendStatus(200);
});

module.exports = router;
