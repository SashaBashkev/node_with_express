const express = require("express");
const router = express.Router();
const adminCtrl = require("../controllers/admin");
// GET /admin/add-product
router.get("/add-product", adminCtrl.getAddProduct);
// GET /admin/products
router.get("/products", adminCtrl.getProducts);
// POST /admin/add-products
router.post("/add-product", adminCtrl.postAddProduct);

module.exports = router;
