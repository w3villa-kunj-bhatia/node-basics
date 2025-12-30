const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") {
    return res.end();
  }

  const log = `${Date.now()}: ${req.url} New request received\n`;

  fs.appendFile("log.txt", log, (err) => {
    if (err) {
      res.end("Error writing to log");
      return;
    }

    switch (req.url) {
      case "/":
        res.end("Home Page");
        break;
      case "/about":
        res.end("I am Kunj Bhatia");
        break;
      case "/contact":
        res.end("Contact us");
        break;
      default:
        res.end("404 Page Not Found");
    }
  });
});

myServer.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
