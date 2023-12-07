const {
  getAirportsByCity,
  getFlightsByDateRoute,
} = require("../utils/amadeus");

async function getAirports(cityName) {
  const resp = await getAirportsByCity(cityName);
  if (!resp || !resp.data) return new Error("Dependency Error");
  return resp.data;
}

async function getFlights(departureDate, departureLocation, arrivalLocation) {
  const resp = await getFlightsByDateRoute(
    departureDate,
    departureLocation,
    arrivalLocation,
  );
  if (!resp || !resp.data) return new Error("Dependency Error");
  return resp.data;
}

module.exports = { getAirports, getFlights };
