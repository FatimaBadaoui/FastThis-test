import express from "express";
import cors from "cors";
import { errorHandler, notFound } from "./middleware/errorHandler.js";
import productRouter from "./routes/product.router.js";

const app = express();
const { PORT = 3000 } = process.env;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Routes
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to my Shopify API! 🚀",
  });
});

app.use("/products", productRouter);

// Error handlers
app.use(notFound);
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on  http://localhost:${PORT}`);
});
