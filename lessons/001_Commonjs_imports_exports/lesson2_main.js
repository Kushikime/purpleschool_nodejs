const a = 1;

if (a > 0) {
  // It loads the entire file in any case
  const log = require("./lesson2_chars.js");
  log();
} else {
  console.log("a <= 0");
}

// let myChars = characters;

// myChars = stealRing(myChars, "Frodo");

// for (const c of characters) {
//   console.log("c: ", c);
// }
