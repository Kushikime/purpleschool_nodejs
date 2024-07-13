// Circular dep.
// const { a } = require("./lesson2_main");

console.log("LOAD 1");

let characters = [
  { name: "Frodo", hasRing: false },
  { name: "Bilbo", hasRing: false },
];

// function stealRing(chars, owner) {
//   return chars.map((char) => {
//     if (char.name === owner) {
//       char.hasRing = true;
//     } else {
//       char.hasRing = false;
//     }
//   });
// }

// Partial exports
// module.exports = { characters, stealRing };

console.log("LOAD 2");

// Global export
module.exports = function log() {
  console.log("log");
};
