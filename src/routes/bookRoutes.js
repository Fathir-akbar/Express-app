import express from "express";
import {
  addBookHandler,
  deleteBookByIdHandler,
  getAllBooksHandler,
  getBookByIdHandler,
  updateBookByIdHandler,
} from "../handler/bookHandler.js";

const router = express.Router();

//Routing
router.get("/books", getAllBooksHandler);
router.post("/books", addBookHandler);
router.get("/books/:bookId", getBookByIdHandler);
router.put("/books/:bookId", updateBookByIdHandler);
router.delete("/books/:bookId", deleteBookByIdHandler);

router.get("/", (req, res) => {
  res.send("Hello World");
});

export default router;
