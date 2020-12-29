const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

const summonerRouter = require("./routes/summoner");
app.use("/summoner", summonerRouter);
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
