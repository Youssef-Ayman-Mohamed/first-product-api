const express = require("express");
const router = express.Router();
const controllers = require("../controllers/product.controller");
const { validationResult, body } = require("express-validator");

router.get("/", controllers.getAllProducts);
router.get("/:id", controllers.getSingleProduct);
router.post(
   "/",
   body("name").notEmpty().isLength({ min: 3 }),
   body("price").notEmpty().isNumeric(),
   body("stock").notEmpty().isNumeric(),
   body("sizes").isArray(),
   (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
         return res.status(400).json({ errors: errors.array() });
      }
      next();
   },
   controllers.addProduct
);

router.put("/:id", controllers.updateProduct);
router.delete("/:id", controllers.deleteProduct);
module.exports = router;