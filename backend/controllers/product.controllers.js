import asyncHandler from "../config/asyncHandler.js";
import Product from "../model/Product.model.js";

/* 
@desc    Add a new product
@route   POST /products
@access  Public
*/
const addProduct = asyncHandler(async (req, res) => {
  const newProduct = await Product.create(req.body);
  res.status(201).json({
    message: "Product added successfully",
    product: newProduct,
  });
});

export { addProduct };
