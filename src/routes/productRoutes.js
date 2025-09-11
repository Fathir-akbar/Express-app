import express from "express";
import {
  addProductHandler,
  deleteProductByIdHandler,
  getAllProductsHandler,
  getProductByIdHandler,
  updateProductByIdHandler,
} from "../handler/productHandler.js";

const productsRouter = express.Router();

//mendapatkan semua produk
productsRouter.get("/products", getAllProductsHandler);
productsRouter.post("/products", addProductHandler);
productsRouter.get("/products/:productId", getProductByIdHandler);
productsRouter.put("/products/:productId", updateProductByIdHandler);
productsRouter.delete("/products/:productId", deleteProductByIdHandler);

export default productsRouter;
