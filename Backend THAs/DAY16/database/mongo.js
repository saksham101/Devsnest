const mongoose = require("mongoose");

const mongodb = "mongodb://127.0.0.1/my_database";

mongoose.connect(mongodb, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on("error", () => console.log("Cannot connect MongoDB"));