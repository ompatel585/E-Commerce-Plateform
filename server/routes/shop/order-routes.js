// const express = require("express");

// const {
//     createOrder,
//     getAllOrdersByUser,
//     getOrderDetails,
//     capturePayment,
// } = require("../../controllers/shop/order-controller");

// const router = express.Router();

// router.post("/create", createOrder);
// router.post("/capture", capturePayment);
// router.get("/list/:userId", getAllOrdersByUser);
// router.get("/details/:id", getOrderDetails);

// module.exports = router;


import express from "express";

import {
    createOrder,
    getAllOrdersByUser,
    getOrderDetails,
    capturePayment,
} from "../../controllers/shop/order-controller.js"; // add .js extension

const router = express.Router();

router.post("/create", createOrder);
router.post("/capture", capturePayment);
router.get("/list/:userId", getAllOrdersByUser);
router.get("/details/:id", getOrderDetails);

export default router;
