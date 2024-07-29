let outer = null;
let run = function () {
  let inner = outer;
  let unused = function () {
    if (inner) {
      console.log("hi");
    }
  };

  outer = {
    longStr: new Array(1000000).join("*"),
  };
};

setInterval(run, 1000);


// node --expose-gc --trace_gc .\lessons\009_GC\app.js // TO TRACE GC