const helmet = require("helmet"); //Secure HTTP headers
const compression = require("compression");
const serveStatic = require("serve-static");
const path = require("path");
const cwd = process.cwd();

module.exports = function(app) {
  app.use(helmet());
  app.use(compression());

  console.log("serving static content: ", path.join(cwd, "build"));

  app.enable("trust proxy");

  // Redirect to https
  // if (process.argv[2] !== "local") {
  app.use((req, res, next) => {
    if (req.secure) {
      console.log("Secure request", req.secure);
      next();
    } else {
      console.log("request object");
      console.log(req.headers);
      console.log(req.url);
      console.log(req.hostname);

      console.log(`redirect to ... https://${req.headers.host}/`);
      res.redirect(`https://${req.headers.host}/`);
    }
  });
  // }

  // Serve static revved files with uncoditional cache
  app.use(
    serveStatic(path.join(cwd, "build"), {
      index: false,
      setHeaders: (res, path) => {
        res.setHeader("Cache-Control", "public, immutable, max-age=31536000");
      }
    })
  );

  // Route any non API and non static file to React Client Router for SPA development
  app.use((req, res) => {
    console.log("sendFile", path.join(cwd, "build", "index.html"));
    res.sendFile(path.join(cwd, "build", "index.html"));
  });
};
