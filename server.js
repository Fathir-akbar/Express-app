import express from "express";

//membuat server
const app = express();

//menentukan port
const port = 5000;


//data store
const books = [
  { id: 1, 
    name: "tuntunan sholat", 
    author: "fathir akbar" 
  },
  { id: 2, 
    name: "belajar nodejs",
    author: "kartono" 
  },
  { id: 3, 
    name: "pemrograman dasar",
    author: "ustadz budi" 
  },
];

//Handler
const getAllBooksHandler = (req, res) => {
  res.json({
    status: "success",
    data: { books },
  });
};

//Routing
app.get("/books", getAllBooksHandler);

app.get("/", (req, res) => {
  res.send("Hello World");
});

//menjalankan server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
