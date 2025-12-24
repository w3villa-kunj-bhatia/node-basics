const fs = require("fs");

fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  const lines = data.split("\n").join("\n");

  fs.writeFile("output.txt", lines, (err) => {
    if (err) {
      console.error("Error writing file:", err);
      return;
    }
    
    console.log("File written successfully");
  });
});
