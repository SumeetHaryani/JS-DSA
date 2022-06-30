function asyncFunction(time) {
  return function (callback) {
    setTimeout(() => callback(time), time);
  };
}
let tasks = [asyncFunction(200), asyncFunction(100), asyncFunction(150)];

function asyncSeries(task, finalCallback) {
  const result = [];
  let taskCompleted = 0;
  task.reduce((acc, current) => {
    return acc.then((val) => {
      return new Promise((resolve, reject) => {
        current((value) => {
          result.push(value);
          taskCompleted++;
          if (taskCompleted === task.length) {
            finalCallback(result);
          } else {
            resolve();
          }
        });
      });
    });
  }, Promise.resolve());
}
asyncSeries(tasks, (finalArray) => {
  console.log(finalArray);
});

// .then series is created