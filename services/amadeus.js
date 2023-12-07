const { getAirportsByCity } = require("../utils/amadeus");

async function getAirports(cityName) {
  const resp = await getAirportsByCity(cityName);
  if (!resp || !resp.data) return new Error("Dependency Error");
  return resp.data;
}

module.exports = { getAirports };
