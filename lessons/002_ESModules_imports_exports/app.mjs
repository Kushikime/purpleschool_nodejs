// import log, { characters, greet as sayGreet } from "./characters.mjs"; // Its OK
// import * as char from './characters.mjs - afterwards you can access it like char.characters

import log from "./characters.mjs"; // Its OK

// for (const c of characters) {
//   sayGreet(c);
// }

// log();

async function main() {
  try {
    const { characters, greet: sayGreet } = await import("./characters.mjs"); // Non blocking way to import
    for (const c of characters) {
      sayGreet(c);
    }

    log();
  } catch (err) {
    console.log("our error");
  }
}

main();
