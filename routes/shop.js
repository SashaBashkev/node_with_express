const express = require("express");
const router = express.Router();
const shopCtrl = require("../controllers/shop");
// GET /
router.get("/", shopCtrl.getIndex);
// GET /
router.get("/products", shopCtrl.getProducts);
router.get("/cart", shopCtrl.getCart);
router.get("/checkout", shopCtrl.getCheckout);

module.exports = router;
