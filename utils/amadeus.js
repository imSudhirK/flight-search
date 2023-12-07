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

async function getFlightsByDateRoute(
  departureDate,
  departureLocation,
  arrivalLocation,
) {
  return amadeus.shopping.flightOffersSearch.get({
    originLocationCode: departureLocation,
    destinationLocationCode: arrivalLocation,
    departureDate: departureDate,
    adults: "1",
  });
}

module.exports = { getAirportsByCity, getFlightsByDateRoute };
