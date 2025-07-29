// const mongoose = require("mongoose");

// const AddressSchema = new mongoose.Schema(
//     {
//         userId: String,
//         address: String,
//         city: String,
//         pincode: String,
//         phone: String,
//         notes: String,
//     },
//     { timestamps: true }
// );

// module.exports = mongoose.model("Address", AddressSchema);


import mongoose from "mongoose";

const AddressSchema = new mongoose.Schema(
    {
        userId: String,
        address: String,
        city: String,
        pincode: String,
        phone: String,
        notes: String,
    },
    { timestamps: true }
);

export default mongoose.model("Address", AddressSchema);
