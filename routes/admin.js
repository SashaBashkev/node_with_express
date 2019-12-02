const express = require("express");
const router = express.Router();
const productsCtrl = require("../controllers/products");

router.get("/add-product", productsCtrl.getAddProduct);
router.post("/add-product", productsCtrl.postAddProduct);

module.exports = router;
