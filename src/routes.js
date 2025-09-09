import express from "express";
import { getAllBooksHandler } from "./handler.js";
import { addBookHandler } from "./handler.js";
import { getBookByIdHandler } from "./handler.js";
import { updateBookByIdHandler } from "./handler.js";

const router = express.Router();

//Routing
router.get("/books", getAllBooksHandler);
router.post("/books", addBookHandler);
router.get("/books/:bookId", getBookByIdHandler);
router.put("/books/:bookId", updateBookByIdHandler);

router.get("/", (req, res) => {
  res.send("Hello World");
});

export default router;