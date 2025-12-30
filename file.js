const fs = require("fs");

// fs.writeFileSync("./output.txt", "Hello, World!");

// const result = fs.readFileSync("./contacts.txt", "utf-8");
// console.log(result);

fs.readFile("./contacts.txt", "utf-8", (err, result) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log(result);
});

fs.appendFileSync("./output.txt", `${Date.now()} Hey there!\n`);

// fs.cpSync("./output.txt", "./output_copy.txt");

fs.unlinkSync("./output_copy.txt");