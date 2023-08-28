// With God's Help
const uuid = require("../../helpers/uuid");
const axiosData = require("../../helpers/axios");
const jsonfile = require("../../helpers/jsonfile");

// const products = [
//   {
//     id: 1,
//     title: "Mouse",
//     description: "A mouse to your PC.",
//     price: "9.99",
//     category: "PC-Equipment",
//     image:
//       "https://cdn.pixabay.com/photo/2012/03/01/01/33/mouse-20223_1280.jpg",
//     quantity: 10,
//     rating: {
//       rate: 4.5,
//       count: 10,
//     },
//   },
//   {
//     id: 2,
//     title: "Mouse 1",
//     description: "A mouse to your PC.",
//     price: "9.99",
//     category: "PC-Equipment",
//     image:
//       "https://cdn.pixabay.com/photo/2012/03/01/01/33/mouse-20223_1280.jpg",
//     quantity: 10,
//     rating: {
//       rate: 4.5,
//       count: 10,
//     },
//   },
//   {
//     id: 3,
//     title: "Mouse 2",
//     description: "A mouse to your PC.",
//     price: "9.99",
//     category: "PC-Equipment",
//     image:
//       "https://cdn.pixabay.com/photo/2012/03/01/01/33/mouse-20223_1280.jpg",
//     quantity: 10,
//     rating: {
//       rate: 4.5,
//       count: 10,
//     },
//   },
// ];

// products.map((product) => (product.id = uuid()));
const randomNumber = () => {
  return Math.round(Math.random() * 10);
};
const getProducts = async () => {
  // כל מקום שיש פונקציה אסינכרונית תוסיף את מנגנון try catch
  // תחזיר אחור פרומיס ריזולב במקרה של הצלחה ופרומיס ריג'קט למקרה של כישלון
  try {
    const products = await jsonfile.jsonLoader("products.json", "products");
    if (products.length === 0) {
      Promise.reject();
    }
    return Promise.resolve(products);
  } catch {
    try {
      const products = await axiosData();
      products.map((product) => (product.quantity = randomNumber()));
      jsonfile.jsonWriter("./products.json", products, "products");
      return Promise.resolve(products);
    } catch (error) {
      return Promise.reject(error.message);
    }
  }
};
const findProductById = (products, id) => {
  return products.find((product) => product.id == id);
};
const updateJson = (products) => {
  jsonfile.jsonWriter("./products.json", products, "products");
};
module.exports = { getProducts, findProductById, updateJson };
