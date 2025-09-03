import express from "express";
import router from "./routes.js";

//membuat server
const app = express();

app.use(express.json());

//menentukan port
const port = 5000;

app.use(router);

//menjalankan server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
