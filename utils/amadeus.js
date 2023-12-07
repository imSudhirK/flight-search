require("dotenv").config();
const Amadeus = require("amadeus");

const amadeus = new Amadeus({
  clientId: process.env.AMADEUS_CLIENT_ID,
  clientSecret: process.env.AMADEUS_CLIENT_SECRECT,
});

async function getAirportsByCity(cityName) {
  return amadeus.referenceData.locations.get({
    keyword: cityName,
    subType: "CITY,AIRPORT",
  });
}

module.exports = { getAirportsByCity };
