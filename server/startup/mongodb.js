const fs = require("fs");
const mongoose = require("mongoose");
const config = require("config");

module.exports = function() {
  const DB = config.get("db");

  const sslCA = fs.readFileSync("cert.pem");

  const options = {
    keepAlive: 1,
    connectTimeoutMS: 30000,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    ssl: true,
    sslCA
  };

  mongoose
    .connect(DB, options)
    .then(() => {
      console.log(`Connected to MongoDB... ${DB}`);
    })
    .catch(err => console.log("La conexión a mongo falló con error: ", err));
};
