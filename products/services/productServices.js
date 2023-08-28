// With God's help

const productDal = require("../DAL/productDal");

const getProducts = async () => {
  try {
    const products = await productDal.getProducts();

    return Promise.resolve(products);
  } catch (error) {
    return Promise.reject(error.message);
  }
};
const findProductById = (products, id) => {
  return productDal.findProductById(products, id);
};
const updateJson = (products) => {
  return productDal.updateJson(products);
};
const checkRatingObj = (ratingObj) => {
  const keys = ["rate", "count"];
  const ratingObjKeys = Object.keys(ratingObj);
  const missingKeys = [];
  keys.forEach((key) => {
    if (ratingObjKeys.includes(key)) {
    } else {
      missingKeys.push(key);
    }
  });
  if (missingKeys.length !== 0) {
    throw new Error(
      `Your rating object is missing keys! The missing keys are: ${missingKeys}`
    );
  }
};
const checkProductObject = (product) => {
  const keys = [
    "id",
    "title",
    "price",
    "description",
    "category",
    "image",
    "rating",
  ];
  const productKeys = Object.keys(product);
  const missingKeys = [];
  keys.forEach((key) => {
    if (productKeys.includes(key)) {
      console.log(`Matching product key: ${key}`);
      if (key === "rating") {
        console.log(product[key]);
        checkRatingObj(product[key]);
      }
    } else {
      missingKeys.push(key);
    }
  });
  if (missingKeys.length !== 0) {
    throw new Error(`Your product is missing these keys: ${missingKeys}`);
  }
};
module.exports = {
  getProducts,
  findProductById,
  updateJson,
  checkProductObject,
};
