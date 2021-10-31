const router = require("express").Router();
const { Op } = require("sequelize");
const Product = require("../models/product");

router.get("/", async (req, res) => {
  try {
    const query = req.query;
    const count = parseInt(query.count) || 10;
    const page = parseInt(query.page) || 1;
    const after = parseInt(query.after);

    let sql = {};

    if (after) {
      sql = {
        where: {
          id: {
            [Op.gt]: after,
          },
        },
      };
    } else {
      sql = {
        offset: count * (page - 1),
      };
    }

    const products = await Product.findAll({
      ...sql,
      attributes: ["id", "title", "price", "desc", "image"],
      limit: count,
    });

    res.status(200).json({
      count: products.length,
      items: products,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Internal Error!!",
      err,
    });
  }
});

router.get("/genproducts", async (req, res) => {
  const now = Date.now();
  try {
    [...Array(50)].forEach(async (_, inx) => {
      const productId = now + inx;
      await Product.create({
        title: `Product ${productId}`,
        price: Math.floor(50 + Math.random() * 10000),
        count: Math.floor(2 + Math.random() * 2000),
        desc: `Product Desc ${productId}`,
        image: `https://productImg.com/${productId}`,
      });
    });

    res.status(201).json({
      message: "Products Created!",
      success: true,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      err,
      message: "Internal Error!!",
    });
  }
});

module.exports = router;