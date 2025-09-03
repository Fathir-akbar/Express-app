import { books } from "./data.js";
//Handler
export const getAllBooksHandler = (req, res) => {
  res.json({
    status: "success",
    data: { books },
  });
};

export const addBookHandler = (req, res) => {
  const { name, author } = req.body;

  const id = Date.now();
  //wadah
  const newBook = { id, name, author };

  books.push(newBook);

  res.status(201).json({
    status: "success",
    message: "Buku berhasil ditambahkan",
    data: {
      bookId: id,
    },
  });
};
