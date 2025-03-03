require("dotenv").config();
const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = express();
app.use(express.json());
app.use(cors());
app.use("/", routes);

const PORT = parseInt(process.env.PORT) || 4000;
app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
