// const mongoose = require("mongoose");

// const ProductReviewSchema = new mongoose.Schema(
//     {
//         productId: String,
//         userId: String,
//         userName: String,
//         reviewMessage: String,
//         reviewValue: Number,
//     },
//     { timestamps: true }
// );

// module.exports = mongoose.model("ProductReview", ProductReviewSchema);


import mongoose from "mongoose";

const ProductReviewSchema = new mongoose.Schema(
    {
        productId: String,
        userId: String,
        userName: String,
        reviewMessage: String,
        reviewValue: Number,
    },
    { timestamps: true }
);

export default mongoose.model("ProductReview", ProductReviewSchema);
