// const express = require("express");

// const {
//     handleImageUpload,
//     addProduct,
//     editProduct,
//     fetchAllProducts,
//     deleteProduct,
// } = require("../../controllers/admin/products-controller");

// const { upload } = require("../../helpers/cloudinary");

// const router = express.Router();

// router.post("/upload-image", upload.single("my_file"), handleImageUpload);
// router.post("/add", addProduct);
// router.put("/edit/:id", editProduct);
// router.delete("/delete/:id", deleteProduct);
// router.get("/get", fetchAllProducts);

// module.exports = router;

import express from 'express'

import {
    handleImageUpload,
    addProduct,
    editProduct,
    fetchAllProducts,
    deleteProduct,
} from "../../controllers/admin/products-controller.js";  // note the .js extension

import { upload } from "../../helpers/cloudinary.js"; // also add .js extension here

const router = express.Router();

router.post("/upload-image", upload.single("my_file"), handleImageUpload);
router.post("/add", addProduct);
router.put("/edit/:id", editProduct);
router.delete("/delete/:id", deleteProduct);
router.get("/get", fetchAllProducts);

export default router;
