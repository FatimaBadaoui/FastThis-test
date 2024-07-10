import { makeAutoObservable } from "mobx";
import axios from "axios";

class ProductStore {
  title = "";
  price = 0;
  stockQuantity = 0;
  description = "";
  successMsg = "";
  errorMsg = "";

  constructor() {
    makeAutoObservable(this);
  }

  setTitle(title) {
    this.title = title;
  }

  setPrice(price) {
    this.price = price;
  }

  setStockQuantity(stockQuantity) {
    this.stockQuantity = stockQuantity;
  }

  setDescription(description) {
    this.description = description;
  }

  // Submit Form
  async submitForm() {
    // Validate Form
    if (
      this.title === "" ||
      this.price === 0 ||
      this.stockQuantity === 0 ||
      this.description === ""
    ) {
      this.errorMsg = "Please fill all the fields";
      return;
    }
    // API Call
    try {
      console.log("submitForm");
      await axios.post("http://localhost:5000/products", {
        title: this.title,
        price: this.price,
        stockQuantity: this.stockQuantity,
        description: this.description,
      });
      this.successMsg = "Product added successfully";
    } catch (error) {
      this.errorMsg = "Something went wrong. Please try again later.";
    }

    // Reset Form
    this.resetForm();
  }

  // Reset Form
  resetForm() {
    this.title = "";
    this.price = 0;
    this.stockQuantity = 0;
    this.description = "";
    this.successMsg = "";
    this.errorMsg = "";
  }
}

export const productStore = new ProductStore();
