import { Router } from "express";
import { addProduct } from "../controllers/product.controllers.js";

const router = Router();

// POST /products
router.post("/", addProduct);

export default router;