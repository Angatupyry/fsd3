const axios = require("axios");
const coins = async (req, res, next) => {
  try {
    const getCoins = await axios(
      "https://api.coindesk.com/v1/bpi/currentprice.json"
    );

    const dolar = getCoins.data.bpi.USD;

    return res.status(200).json({ dolar });
  } catch (error) {
    return next(error);
  }
};

module.exports = { coins };
