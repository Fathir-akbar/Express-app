import { products } from "../data/products.js";


export const getAllProductsHandler = (req, res) => {
  res.status(200).json({
    status: "success",
    data: products,
  });
};

//menambahkan produk baru

export const addProductHandler = (req, res) => {
  const { name, deskripsi, price } = req.body;

  if (!name || !name.trim()) {
    return res.status(400).json({
      status: "fail",
      message: "nama produk harus diisi",
    });
  }

  if (!deskripsi || !deskripsi.trim()) {
    return res.status(400).json({
      status: "fail",
      message: "deskripsi produk harus diisi",
    });
  }

  if (price == null || isNaN(price) || price < 0) {
    return res.status(400).json({
      status: "fail",
      message: "harga produk harus diisi dengan angka yang valid",
    });
  }

  const id = Date.now();

  const newProduct = { id, name, deskripsi, price };

  products.push(newProduct);

  res.status(201).json({
    status: "success",
    message: "Produk berhasil ditambahkan",
    data: {
      product: newProduct,
    },
  });
};

//mendapatkan produk berdasarkan id

export const getProductByIdHandler = (req, res) => {
  const { productId } = req.params;
  const numericProductId = Number(productId);

  const product = products.find((p) => p.id === numericProductId);

  if (!product) {
    return res.status(404).json({
      status: "fail",
      message: "Produk tidak ditemukan",
    });
  }

  res.status(200).json({
    status: "success",
    data: {
      product,
    },
  });
};

// mengubah produk berdasarkan id

export const updateProductByIdHandler = (req, res) => {
  const { productId } = req.params;
  const { name, deskripsi, price } = req.body;
  const numericProductId = Number(productId);

  const product = products.find((p) => p.id === numericProductId);
  if (!product) {
    return res.status(404).json({
      status: "fail",
      message: "Produk tidak ditemukan",
    });
  }
  if (!name || !name.trim()) {
    return res.status(400).json({
      status: "fail",
      message: "nama produk harus diisi",
    });
  }
  if (!deskripsi || !deskripsi.trim()) {
    return res.status(400).json({
      status: "fail",
      message: "deskripsi produk harus diisi",
    });
  }
  if (price == null || isNaN(price) || price < 0) {
    return res.status(400).json({
      status: "fail",
      message: "harga produk harus diisi dengan angka yang valid",
    });
  }

    product.name = name;
    product.deskripsi = deskripsi;
    product.price = price;

    res.status(200).json({
        status: "success",
        message: "Produk berhasil diupdate",
        data: {
            product,
        },
    })

};

//menghapus produk berdasarkan id

export const deleteProductByIdHandler = (req, res) => {
    const { productId } = req.params;
    const numericProductId = Number(productId);

    const product = products.find((p) => p.id === numericProductId);

    if (!product) {
    return res.status(404).json({
      status: "fail",
      message: "Buku tidak ditemukan",
    });
  }

    const index = products.indexOf(product);
    products.splice(index, 1);

    res.status(200).json({
        status: "success",
        message: "Produk berhasil dihapus",
    })

};
