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

// menambahkan buku berdasarkan id

export const getBookByIdHandler = (req, res) => {
  const { bookId } = req.params;

  const numericBookId = Number(bookId);

  const book = books.find((b) => b.id === numericBookId);

  if (!book) {
    return res.status(404).json({
      status: "fail",
      message: "Buku tidak ditemukan",
    });
  }

  res.status(200).json({
    status: "success",
    data: {
      book,
    },
  });
};

// mengubah data buku berdasarkan id
export const updateBookByIdHandler = (req, res) => {
  const { bookId } = req.params;
  const { name, author } = req.body;
  const numericBookId = Number(bookId);

  const book = books.find((b) => b.id === numericBookId);
  if (!book) {
    return res.status(404).json({
      status: "fail",
      message: "Buku tidak ditemukan",
    });
  }

  book.name = name;
  book.author = author;

  res.status(200).json({
    status: "success",
    message: "Buku berhasil diubah",
    data: {
      book,
    },
  });
};