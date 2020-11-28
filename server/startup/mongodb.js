const mongoose = require("mongoose");
const config = require("config");

const chalk = require("chalk");
const log = (text) => console.log(chalk.greenBright(`[mongodb] ${text}`));

module.exports = async (env) => {
  // Disable deprecation warnings
  mongoose.set("useNewUrlParser", true);
  mongoose.set("useFindAndModify", false);
  mongoose.set("useCreateIndex", true);

  // Initial mongo settings
  const options = {
    keepAlive: 1,
    connectTimeoutMS: 30000,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  // Detecting if should conect to local mongo server
  log(`connecting to mongo server ... `);

  const dbName = config.get(`DB_PROD`);
  const dbHost = config.get("DB_HOST");
  const dbUser = config.get("DB_USER");
  const dbPass = config.get("DB_PASS");

  const uri = `mongodb+srv://${dbUser}:${dbPass}@${dbHost}/${dbName}?retryWrites=true&w=majority`;

  // if (!local) {
  //   options.ssl = true;
  //   options.sslCA = fs.readFileSync(config.get("DB_CERT"));
  // }

  try {
    log(uri);
    await mongoose.connect(uri, options);
    log(`connected to ${dbName} on ${env} env at ${dbHost}...`);
  } catch (error) {
    log(error.message);
  }
};
