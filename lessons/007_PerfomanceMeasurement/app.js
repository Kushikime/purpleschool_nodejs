function slowV1() {
  performance.mark("start");

  const arr = [];

  for (let i = 0; i < 10000000; i++) {
    arr.push(i * i);
  }

  performance.mark("end");
  performance.measure("slow", "start", "end");

  console.log(performance.getEntriesByName("slow"));
}

/// ---------- V2
const perf_hooks = require("perf_hooks");

const perfObserver = new perf_hooks.PerformanceObserver((items, observer) => {
  console.log(items.getEntries());
  const entry = items.getEntriesByName("slow").pop();

  console.log(`${entry.name}: ${entry.duration}`);

  observer.disconnect();
});

perfObserver.observe({
  entryTypes: ["measure", "function"],
});

test = perf_hooks.performance.timerify(test);

function test() {
  const arr = [];

  for (let i = 0; i < 10000000; i++) {
    arr.push(i * i);
  }
}

function slowV2() {
  performance.mark("start");

  const arr = [];

  for (let i = 0; i < 10000000; i++) {
    arr.push(i * i);
  }

  performance.mark("end");
  performance.measure("slow", "start", "end");
}

slowV2();
test();
