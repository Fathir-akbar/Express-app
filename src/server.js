import express from "express";
import productsRouter from "./routes/productRoutes.js";
import router from "./routes/bookRoutes.js";

//membuat server
const app = express();

app.use(express.json());

//menentukan port
const port = 5000;

app.use(router);
app.use(productsRouter)

//menjalankan server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
