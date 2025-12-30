const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") {
    return res.end();
  }

  const log = `${Date.now()}: ${req.method} ${req.url} New request received\n`;

  const myUrl = url.parse(req.url, true);
  console.log(myUrl);

  fs.appendFile("log.txt", log, (err) => {
    switch (myUrl.pathname) {
      case "/":
        if (req.method == "GET") res.end("Home Page");
        res.end("Home Page");
        break;
      case "/about":
        const username = myUrl.query.username || "Guest";
        res.end("Hi ${username}, Welcome to About Page");
        break;
      case "/search":
        const search = myUrl.query.q || "";
        res.end("Here are your results for: ${search}");
        break;
      case "/signup":
        if (req.method == "GET") res.end("This is a Signup Page");
        else if (req.method == "POST") {
          res.end("Form Submitted Successfully");
          //DB Query
          res.end("Success!");
        }
      default:
        res.end("404 Page Not Found");
    }
  });
});

myServer.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
