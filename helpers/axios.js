// With God's Help
const axios = require("axios");
const getData = async () => {
  try {
    const response = await axios.get(`https://fakestoreapi.com/products`);
    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject(error.message);
  }
};
module.exports = getData;
