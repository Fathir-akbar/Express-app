import express from "express";
import { getAllBooksHandler } from "./handler.js";
import { addBookHandler } from "./handler.js";

const router = express.Router();

//Routing
router.get("/books", getAllBooksHandler);
router.post("/books", addBookHandler);

router.get("/", (req, res) => {
  res.send("Hello World");
});

export default router;