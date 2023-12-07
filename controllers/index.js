const amadeusService = require("../services/amadeus");

async function getAirports(req, res) {
  try {
    const keyword = req.query.keyword;
    const resp = await amadeusService.getAirports(keyword);
    if (resp instanceof Error) return res.status(422).send(resp.message);
    return res.status(200).send(resp);
  } catch (err) {
    return res.status(500).send({ error: err });
  }
}

module.exports = { getAirports };
