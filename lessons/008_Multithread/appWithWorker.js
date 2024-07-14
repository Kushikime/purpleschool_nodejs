const { Worker } = require("worker_threads");
const path = require("path");

const compute = (array) => {
  return new Promise((resolve, reject) => {
    const worker = new Worker(path.join(__dirname, "worker.js"), {
      workerData: {
        dataArr: array,
      },
    });

    worker.on("message", (message) => {
      console.log("threadId: ", worker.threadId); // threadId is being incremented by 1 on each worker
      resolve(message);
    });

    worker.on("error", (err) => {
      reject(err);
    });

    worker.on("exit", () => {
      console.log("threadId after the worker closed: ", worker.threadId); // at this phase id is always -1
      console.log("Finished the job");
    });
  });
};

const main = async () => {
  try {
    performance.mark("start");

    const result = await Promise.all([
      compute([25, 10, 19, 48, 30, 50]),
      compute([25, 10, 19, 48, 30, 50]),
      compute([25, 10, 19, 48, 30, 50]),
      compute([25, 10, 19, 48, 30, 50]),
      compute([25, 10, 19, 48, 30, 50]),
      compute([25, 10, 19, 48, 30, 50]),
      compute([25, 10, 19, 48, 30, 50]),
      compute([25, 10, 19, 48, 30, 50]),
      compute([25, 10, 19, 48, 30, 50]),
    ]);

    console.log("result: ", result);

    performance.mark("end");
    performance.measure("main", "start", "end");

    // Difference in almost 1 second and 2.5 times more job done!
    console.log(performance.getEntriesByName("main")[0]);
    // PerformanceMeasure {
    //     name: 'main',
    //     entryType: 'measure',
    //     startTime: 33.67940008640289,
    //     duration: 3565.8904999494553
    //   }
  } catch (err) {
    console.log("MAIN err:", err);
  }
};

main();
