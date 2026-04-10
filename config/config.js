require("dotenv").config();

module.exports = {
  apiKey: process.env.API_KEY,
  secretKey: process.env.SECRET_KEY,
  mode: process.env.MODE || "development",
};
