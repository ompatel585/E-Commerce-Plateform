// const mongoose = require("mongoose");

// const FeatureSchema = new mongoose.Schema(
//     {
//         image: String,
//     },
//     { timestamps: true }
// );

// module.exports = mongoose.model("Feature", FeatureSchema);


import mongoose from "mongoose";

const FeatureSchema = new mongoose.Schema(
    {
        image: String,
    },
    { timestamps: true }
);

export default mongoose.model("Feature", FeatureSchema);
