const { parentPort, workerData } = require("worker_threads");
const factorial = require("./factorial");

const compute = ({ dataArr }) => {
  const arr = [];

  for (let i = 0; i < 100000000; i++) {
    arr.push(i * i);
  }

  return dataArr.map((el) => factorial(el));
};

parentPort.postMessage(compute(workerData));
