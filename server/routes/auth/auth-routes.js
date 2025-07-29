// const express = require("express");
// const {
//     registerUser,
//     loginUser,
//     logoutUser,
//     authMiddleware,
// } = require("../../controllers/auth/auth-controller");

// const router = express.Router();

// router.post("/register", registerUser);
// router.post("/login", loginUser);
// router.post("/logout", logoutUser);
// router.get("/check-auth", authMiddleware, (req, res) => {
//     const user = req.user;
//     res.status(200).json({
//         success: true,
//         message: "Authenticated user!",
//         user,
//     });
// });

// module.exports = router;



import express from "express";
import {
    registerUser,
    loginUser,
    logoutUser,
    authMiddleware,
} from "../../controllers/auth/auth-controller.js"; // add .js extension

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.get("/check-auth", authMiddleware, (req, res) => {
    const user = req.user;
    res.status(200).json({
        success: true,
        message: "Authenticated user!",
        user,
    });
});

export default router;
