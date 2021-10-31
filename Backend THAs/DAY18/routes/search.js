const router = require("express").Router();

const sequelize = require("../database");
const { Op } = require("sequelize");
const Artist = require("../models/artist");

router.get("/", async (req, res) => {
  try {
    const artists = await Artist.findAll({
      where: {
        Name: {
          [Op.like]: `%${req.query.q}%`,
        },
      },
    });
    res.status(200).json({
      count: artists.length,
      items: artists,
    });
  } catch (err) {
    console.error(err);
    res.status(400).json({
      err,
      success: false,
    });
  }
});

router.get("/trgm", (req, res) => {
  sequelize.query("CREATE EXTENSION IF NOT EXISITS pg_trgm;").then(() => {
    sequelize
      .query("SELECT * FROM pg_extension WHERE extname='pg_trgm';")
      .then(() => {
        Artist.findAll({
          attributes: {
            include: [
              sequelize.fn("similarity", sequelize.col("Name"), req.query.q),
              "score",
            ],
          },
          where: [
            sequelize.where(
              sequelize.fn("similarity", sequelize.col("Name"), req.query.q),
              {
                [Op.gt]: 0.3,
              }
            ),
          ],
        })
          .then((artists) => {
            res.status(200).json({
              count: artists.length,
              items: artists,
            });
          })
          .catch((err) => {
            console.error(err);
            res.status(400).json({
              err,
              success: false,
            });
          });
      });
  });
});

router.get("/sound", async (req, res) => {
  try {
    const artists = await sequelize.query(
      `SELECT * FROM "Artist" WHERE "Nationality" IN ("American","British") AND SOUNDEX("Name") = SOUNDEX('${req.query.q}');`
    );
    res.status(200).json({
      count: artists.length,
      items: artists,
    });
  } catch (err) {
    res.status(400).json({
      err,
      success: false,
    });
  }
});

router.get("/metaphone", async (req, res) => {
  try {
    const artists = await sequelize.query(
      `SELECT * FROM "Artist" WHERE "Nationality" ='American' ORDER BY SIMILARITY(METAPHONE("Name",10), METAPHONE('${req.query.q}',10)) DESC LIMIT 5;`
    );
    res.status(200).json({
      count: artists.length,
      items: artists,
    });
  } catch (err) {
    console.error(err);
    res.status(400).json({
      err,
      success: false,
    });
  }
});

router.get("/distance", async (req, res) => {
  try {
    const artist = await sequelize.query(
      `SELECT *, LEVENSHTEIN("Name",'${req.query.q}') FROM "Artist" ORDER BY LEVENSHTEIN("Name",'${req.query.q}') ASC LIMIT 5;`
    );
    res.status(200).json({
      count: artists.length,
      items: artists,
    });
  } catch (err) {
    console.error(err);
    res.status(400).json({
      err,
      success: false,
    });
  }
});

module.exports = router;