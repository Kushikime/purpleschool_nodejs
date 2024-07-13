const fs = require("fs");
const path = require("path");

const data = fs.readFileSync(path.join(__dirname, "text.txt"));

console.log(`This is the log of text.txt file: `, data.toString());
