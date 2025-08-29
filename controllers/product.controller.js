const products = require("../data/products");
let getAllProducts = (req, res) => {
   res.json(products);
};
let getSingleProduct = (req, res) => {
      const product = products.find((p) => p.id == req.params.id);
      if (!product) return res.status(404).json({ msg: "Product not found" });
      res.json(product);
};
let addProduct = (req, res) => {
   const { name, price } = req.body;
   const newProduct = { id: products.length + 1, name, price };
   products.push(newProduct);
   res.status(201).json(newProduct);
};
let updateProduct = (req, res) => {
   const product = products.find((p) => p.id == req.params.id);
   if (!product) return res.status(404).json({ msg: "Product not found" });

   const { name, price } = req.body;
   product.name = name || product.name;
   product.price = price || product.price;

   res.json(product);
};
let deleteProduct = (req, res) => {
   const productIndex = products.findIndex((p) => p.id == req.params.id);
   if (productIndex === -1)
      return res.status(404).json({ msg: "Product not found" });

   const deletedProduct = products.splice(productIndex, 1);
   res.json(deletedProduct);
};

module.exports = {
   getAllProducts,
   getSingleProduct,
   addProduct,
   updateProduct,
   deleteProduct,
};
