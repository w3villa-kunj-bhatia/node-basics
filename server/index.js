// const http = require("http");
// const fs = require("fs");
// const url = require("url");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.send("Hello From Home Page");
});

app.get("/about", (req, res) => {
  return res.send(`Hello ${req.query.name}`);
});

// function myHandler(req, res) {
//   if (req.url === "/favicon.ico") {
//     return res.end();
//   }
//   const log = `${Date.now()}: ${req.method} ${req.url} New request received\n`;
//   const myUrl = url.parse(req.url, true);

//   fs.appendFile("log.txt", log, (err, data) => {
//     switch (myUrl.pathname) {
//       case "/":
//         if (req.method === "GET") res.end("Home Page");
//         break;
//       case "/about":
//         const username = myUrl.query.myname;
//         res.end(`Hi ${username}, Welcome to About Page`);
//         break;
//       case "/search":
//         const search = myUrl.query.search_query;
//         res.end("Here are your results for: " + search);
//         break;
//       case "/signup":
//         if (req.method === "GET") res.end("This is a Signup Page");
//         else if (req.method === "POST") {
//           //DB Query
//           res.end("Success!");
//         }
//       default:
//         res.end("404 Page Not Found");
//     }
//   });
// }

// const myServer = http.createServer(app);

app.listen(5000, () => { 
  console.log("Server started on port 5000");
});

// myServer.listen(5000, () => {
//   console.log("Server is listening on port 5000");
// });
