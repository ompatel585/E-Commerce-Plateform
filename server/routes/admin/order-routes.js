// const express = require("express");

// const {
//     getAllOrdersOfAllUsers,
//     getOrderDetailsForAdmin,
//     updateOrderStatus,
// } = require("../../controllers/admin/order-controller");

// const router = express.Router();

// router.get("/get", getAllOrdersOfAllUsers);
// router.get("/details/:id", getOrderDetailsForAdmin);
// router.put("/update/:id", updateOrderStatus);

// module.exports = router;


import express from "express";

import {
    getAllOrdersOfAllUsers,
    getOrderDetailsForAdmin,
    updateOrderStatus,
} from "../../controllers/admin/order-controller.js"; // note .js extension

const router = express.Router();

router.get("/get", getAllOrdersOfAllUsers);
router.get("/details/:id", getOrderDetailsForAdmin);
router.put("/update/:id", updateOrderStatus);

export default router;
