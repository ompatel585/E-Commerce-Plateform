// const express = require("express");

// const {
//     getFilteredProducts,
//     getProductDetails,
// } = require("../../controllers/shop/products-controller");

// const router = express.Router();

// router.get("/get", getFilteredProducts);
// router.get("/get/:id", getProductDetails);

// module.exports = router;


import express from "express";

import {
    getFilteredProducts,
    getProductDetails,
} from "../../controllers/shop/products-controller.js"; // add .js extension

const router = express.Router();

router.get("/get", getFilteredProducts);
router.get("/get/:id", getProductDetails);

export default router;
