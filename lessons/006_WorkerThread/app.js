const crypto = require("crypto");
const OS = require("os");
const https = require("https");

const start = performance.now();

console.log("CPU THREADS: ", OS.cpus().length);

// Almost we do not use this in production but for tasks like excel parsing or some computing you can use it
// process.env.UV_THREADPOOL_SIZE = OS.cpus().length / 2;

// In windows OS for some reason you need to set the threadpool size before running the app:
// $env:UV_THREADPOOL_SIZE = 24; node .\lessons\006_WorkerThread\app.js (like this)

// for (let i = 0; i < 50; i++) {
//   crypto.pbkdf2("test", "salt", 500000, 64, "sha512", () => {
//     console.log(performance.now() - start);
//   });
// }

// threadpool size will not affect on this because this operations do not trigger CPU intensive tasks and they are being placed to native OS core workers
for (let i = 0; i < 50; i++) {
  https.get("https://yandex.ru", (res) => {
    res.on("data", (data) => {
      console.log("data: ", data);
    });
    res.on("end", () => {
      console.log(performance.now() - start);
    });
  });
}
