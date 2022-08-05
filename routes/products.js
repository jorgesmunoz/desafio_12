const express = require("express");
const productRouter = express.Router();
const { login } = require("../middleware/auth");

const {
  getAllProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/products");

productRouter.get("/:id", login, getProductById);
productRouter.get("/", login, getAllProducts);
productRouter.post("/", login, addProduct);
productRouter.put("/:id", login, updateProduct);
productRouter.delete("/:id", login, deleteProduct);

module.exports = productRouter;
