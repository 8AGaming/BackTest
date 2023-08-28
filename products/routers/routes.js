// With God's Help
const express = require("express");
const productController = require("../controllers/productControllers");

const router = express.Router();

router.get("/products", productController.getProducts);
router.get("/products/:id", productController.getSingleProduct);
router.post("/products", productController.addProduct);
router.put("/products/:id", productController.updateProduct);
router.put(
  "/products/:id/increase_quantity",
  productController.increaseProductQuantity
);
router.put(
  "/products/:id/decrease_quantity",
  productController.decreaseProductQuantity
);
router.delete("/products/:id/delete", productController.deleteProduct);

// router.use("*", (req, res) => {
//   res.status(404).send("Page Not Found - 404");
// });
module.exports = router;
