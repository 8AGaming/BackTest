// With God's Help
const productService = require("../services/productServices");
const uuid = require("../../helpers/uuid");

const getProducts = async (req, res) => {
  try {
    const products = await productService.getProducts();
    res.send(products);
    productService.updateJson(products);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
const getSingleProduct = async (req, res) => {
  try {
    const products = await productService.getProducts();
    const id = req.params.id;
    const product = productService.findProductById(products, id);
    res.send(product);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
const addProduct = async (req, res) => {
  try {
    const products = await productService.getProducts();
    const product = req.body;
    product.id = uuid();
    productService.checkProductObject(product);
    products.push(product);
    res.send("Successfully Added!");
    productService.updateJson(products);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
const updateProduct = async (req, res) => {
  try {
    const products = await productService.getProducts();
    const updateContent = req.body;
    console.log(updateContent);
    productService.checkProductObject(updateContent);
    const id = req.params.id;
    const product = products.find((product) => product.id == id);
    const productIndex = products.indexOf(product);
    products[productIndex] = updateContent;
    products[productIndex].id = uuid();

    res.send({ "#comment": "Successfully Updated!" });
    productService.updateJson(products);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
const deleteProduct = async (req, res) => {
  try {
    const products = await productService.getProducts();
    const id = req.params.id;
    const product = products.find((product) => product.id == id);
    const productIndex = products.findIndex((product) => product.id == id);
    products.splice(productIndex, 1);
    res.send(products);
    productService.updateJson(products);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
const increaseProductQuantity = async (req, res) => {
  try {
    const products = await productService.getProducts();
    const id = req.params.id;
    const product = productService.findProductById(products, id);
    const productIndex = products.indexOf(product);
    products[productIndex].quantity++;
    res.send("Your product quantity has been successfully increased by 1.");
    productService.updateJson(products);
  } catch (error) {
    res.send(error.message);
  }
};
const decreaseProductQuantity = async (req, res) => {
  try {
    const products = await productService.getProducts();
    const id = req.params.id;
    const product = productService.findProductById(products, id);
    const productIndex = products.indexOf(product);
    if (products[productIndex].quantity > 0) {
      products[productIndex].quantity--;
    } else {
      throw new Error("You have 0 quantity, you cannot decease the quantity");
    }
    res.send("Your product quantity has been successfully decreased by 1.");
    productService.updateJson(products);
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = {
  getProducts,
  getSingleProduct,
  addProduct,
  updateProduct,
  deleteProduct,
  increaseProductQuantity,
  decreaseProductQuantity,
};
