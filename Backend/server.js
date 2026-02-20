const express = require("express");
const cors = require("cors");
require("dotenv").config();
const path = require("path");
const connectDB = require("./database/db");
const { connect } = require("http2");
const { asyncWrapProviders } = require("async_hooks");
const app = express();

app.use[
    cors({
        origin: "*",
        methods: ["GET","POST", "PUT", "DELETE" ],
        allowedHeaders: ["Content-Type", "Authorization"],
    })
];

connectDB();

app.use(express.json());

app.use("api/auth", authRoutes);

app.use("/uploads", express.static(path.join(__dirname, "uploads"), {}))

const PORT = process.env.PORT || 4800;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));