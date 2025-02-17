const express = require("express");
const { getProducts, getProductById, addProduct, updateProduct } = require("../controllers/productController");

const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getProductById);

router.post("/", addProduct);

router.put("/:id", updateProduct);

module.exports = router;
