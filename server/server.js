// const express = require("express");
// const mongoose = require("mongoose");
// const cookieParser = require("cookie-parser");
// const cors = require("cors");
// const dotenv = require('dotenv');
// const authRouter = require("./routes/auth/auth-routes");
// const adminProductsRouter = require('./routes/admin/products-routes');
// const adminOrderRouter = require("./routes/admin/order-routes.js");

// const shopProductsRouter = require("./routes/shop/product-routes");
// const shopCartRouter = require("./routes/shop/cart-routes");
// const shopAddressRouter = require('./routes/shop/address-routes');
// const shopOrderRouter = require("./routes/shop/order-routes");
// const shopSearchRouter = require("./routes/shop/search-routes");
// const shopReviewRouter = require("./routes/shop/review-routes");
// const commonFeatureRouter = require("./routes/common/feature-routes");
// dotenv.config();


// mongoose.connect('mongodb+srv://ompatel34003:WFDO5efwGPIvRRkB@cluster0.stkpa0j.mongodb.net/'
// ).then(()=>console.log("MONGODB Connected successfully"));

// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(
//     cors({
//         origin: "http://localhost:5173",
//         methods: ["GET", "POST", "DELETE", "PUT"],
//         allowedHeaders: [
//             "Content-Type",
//             "Authorization",
//             "Cache-Control",
//             "Expires",
//             "Pragma",
//         ],
//         credentials: true,
//     })
// );
// app.use(cookieParser());
// app.use(express.json());
// app.use('/api/auth',authRouter);
// app.use('/api/admin/products',adminProductsRouter);
// app.use("/api/admin/orders", adminOrderRouter);

// app.use("/api/shop/products", shopProductsRouter);
// app.use("/api/shop/cart", shopCartRouter);
// app.use('/api/shop/address', shopAddressRouter);
// app.use("/api/shop/order", shopOrderRouter);
// app.use("/api/shop/search", shopSearchRouter);
// app.use("/api/shop/review", shopReviewRouter);

// app.use("/api/common/feature", commonFeatureRouter);

// app.listen(PORT,()=>{
//     console.log("Server is running on port ",PORT);
//     console.log(`Visit the server on http://localhost:${PORT}`)
// });



const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path"); // ✅ for serving frontend
const dotenv = require("dotenv");

const authRouter = require("./routes/auth/auth-routes");
const adminProductsRouter = require("./routes/admin/products-routes");
const adminOrderRouter = require("./routes/admin/order-routes.js");

const shopProductsRouter = require("./routes/shop/product-routes");
const shopCartRouter = require("./routes/shop/cart-routes");
const shopAddressRouter = require("./routes/shop/address-routes");
const shopOrderRouter = require("./routes/shop/order-routes");
const shopSearchRouter = require("./routes/shop/search-routes");
const shopReviewRouter = require("./routes/shop/review-routes");
const commonFeatureRouter = require("./routes/common/feature-routes");

dotenv.config();

mongoose
    .connect("mongodb+srv://ompatel34003:WFDO5efwGPIvRRkB@cluster0.stkpa0j.mongodb.net/")
    .then(() => console.log("MONGODB Connected successfully"));

const app = express();
const PORT = process.env.PORT || 5000;

// CORS setup (only use this in dev or if your frontend is separate)
app.use(
    cors({
        origin: "http://localhost:5173", // ✅ will be ignored in prod when served from same domain
        methods: ["GET", "POST", "DELETE", "PUT"],
        allowedHeaders: ["Content-Type", "Authorization", "Cache-Control", "Expires", "Pragma"],
        credentials: true,
    })
);

app.use(cookieParser());
app.use(express.json());

// ✅ API Routes
app.use("/api/auth", authRouter);
app.use("/api/admin/products", adminProductsRouter);
app.use("/api/admin/orders", adminOrderRouter);

app.use("/api/shop/products", shopProductsRouter);
app.use("/api/shop/cart", shopCartRouter);
app.use("/api/shop/address", shopAddressRouter);
app.use("/api/shop/order", shopOrderRouter);
app.use("/api/shop/search", shopSearchRouter);
app.use("/api/shop/review", shopReviewRouter);



app.use("/api/common/feature", commonFeatureRouter);

// ✅ Serve frontend static files
app.use(express.static(path.join(__dirname, "../client/dist")));

app.get(/^\/(?!api).*/, (req, res) => {
    res.sendFile(path.join(__dirname, "../client", "dist", "index.html"));
});


app.listen(PORT, () => {
    console.log("Server is running on port ", PORT);
    console.log(`Visit the server on http://localhost:${PORT}`);
});
