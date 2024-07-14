const { log } = require("console");
const EventEmitter = require("events");

class IntervalService extends EventEmitter {
  constructor(dataLength, disableLogging = false) {
    super();

    this._disableLogging = disableLogging;
    this._data = "-".repeat(dataLength);
  }

  start() {
    this._intervalId = setInterval(() => {
      if (!this.disableLogging) {
        log("emits data to %s listeners", this.listenerCount("data"));
      }
      this.emit("data", this._data);
    }, 100);
  }
  stop() {
    if (this._intervalId) {
      clearInterval(this._intervalId);
    }
  }
}
