import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./backend/config/db.js";

import TestProduct from './backend/controllers/productController.js';
import TestMissingProduct from './backend/controllers/missingProductController.js';
import TestEmployee from './backend/controllers/employeeController.js'
import TestManager from './backend/controllers/managerController.js'
import TestPromotion from './backend/controllers/promotionController.js'
import TestLiquidation from './backend/controllers/liquidationController.js'

const app = express();


app.use(cors());
app.use(express.json());
dotenv.config();

await connectDB();

app.get("/", (req, res) => {
    res.send({Hello : "World"});
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

TestProduct();
TestMissingProduct();
TestEmployee();
TestManager();
TestPromotion();
TestLiquidation();
