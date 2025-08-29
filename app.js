const express = require("express");
const app = express();
app.use(express.json());
const { validationResult, body } = require("express-validator");

const router = require("./routes/product.routes");
app.use("/api/products", router);

const PORT = 5000;
app.listen(PORT, () => {
   console.log(`Server running on port ${PORT}`);
});
