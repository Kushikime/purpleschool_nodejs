const { exec, spawn } = require("child_process");

// const childProcess = exec("dir", (err, stdout, stderr) => { // you can run any CLI commands
//   if (err) {
//     console.error(err.message);
//   }

//   console.log("stdout: ", stdout);
//   console.log("stderr: ", stderr);
// });

// childProcess.on("exit", (code) => {
//   console.log("exit code: ", code); // for some reason exit code 0 was printed before the rest of the app
// });

const childProcess = spawn("dir");

childProcess.stdout.on("data", (data) => {
  console.log("stdout data code: ", data); // for some reason exit code 0 was printed before the rest of the app
});

childProcess.stderr.on("data", (data) => {
  console.log("stderr data code: ", data); // for some reason exit code 0 was printed before the rest of the app
});

childProcess.on("exit", (code) => {
  console.log("Exit code: ", code); // for some reason exit code 0 was printed before the rest of the app
});
