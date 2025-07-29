// const express = require("express");

// const {
//     addFeatureImage,
//     getFeatureImages,
// } = require("../../controllers/common/feature-controller");

// const router = express.Router();

// router.post("/add", addFeatureImage);
// router.get("/get", getFeatureImages);

// module.exports = router;

import express from "express";

import {
    addFeatureImage,
    getFeatureImages,
} from "../../controllers/common/feature-controller.js"; // add .js extension

const router = express.Router();

router.post("/add", addFeatureImage);
router.get("/get", getFeatureImages);

export default router;
