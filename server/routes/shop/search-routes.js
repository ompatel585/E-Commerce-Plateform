// const express = require("express");

// const { searchProducts } = require("../../controllers/shop/search-controller");

// const router = express.Router();

// router.get("/:keyword", searchProducts);

// module.exports = router;


import express from "express";

import {
    addProductReview,
    getProductReviews,
} from "../../controllers/shop/product-review-controller.js"; // add .js extension

const router = express.Router();

router.post("/add", addProductReview);
router.get("/:productId", getProductReviews);

export default router;
