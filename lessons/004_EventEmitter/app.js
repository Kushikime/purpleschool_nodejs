const EventEmitter = require("events");

const myEmitter = new EventEmitter();

const logDbConnection1 = (data) => {
  console.log("DB Connected 1: ", data);
};

const logDbConnection2 = (data) => {
  console.log("DB Connected 2: ", data);
};

// addListener and on are the same
myEmitter.addListener("connected", () => {
  logDbConnection1({ test: "1" });
});
myEmitter.on("connected", () => {
  logDbConnection2({ test: "2" });
});

// removeListener and off are the same
// myEmitter.removeListener("connected", logDbConnection1);
// myEmitter.off("connected", logDbConnection2);

myEmitter.emit("connected");

myEmitter.removeAllListeners();

myEmitter.on("message", () => console.log("got a message"));

myEmitter.prependListener("message", () => console.log("got a message 1"));
myEmitter.prependListener("message", () => console.log("got a message 2"));

myEmitter.emit("message");

console.log(myEmitter.eventNames());
