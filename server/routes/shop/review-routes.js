// const express = require("express");

// const {
//     addProductReview,
//     getProductReviews,
// } = require("../../controllers/shop/product-review-controller");

// const router = express.Router();

// router.post("/add", addProductReview);
// router.get("/:productId", getProductReviews);

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
