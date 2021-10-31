const router = require("express").Router();
const path = require("path");
const fs = require("fs");

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/html/index.html"));
});

router.get("/video", (req, res) => {
  const range = req.headers.range;
  if (!range) res.status(400).send("Range Req");

  const vidPath = path.join(__dirname, "../public/videos/GP.mp4");
  const vidSize = fs.statSync(vidPath).size;

  const CHUNK_SIZE = 10 ** 6;
  const start = Number(range.replace(/\D/g, ""));
  const end = Math.min(start + CHUNK_SIZE, vidSize - 1);

  const contentLength = end - start + 1;

  const headers = {
    "Content-Range": `bytes ${start}- ${end}/${vidSize}`,
    "Accept-Ranges": "bytes",
    "Content-Length": contentLength,
    "Content-Type": "video/mp4",
  };

  res.writeHead(206, headers);

  const vidStream = fs.createReadStream(vidPath, { start, end });

  vidStream.pipe(res);
});

module.exports = router;