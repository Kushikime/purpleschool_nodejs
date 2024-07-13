const fs = require("fs");

const data = fs.readFileSync("./samples/text.txt");
console.log(data.toString());
