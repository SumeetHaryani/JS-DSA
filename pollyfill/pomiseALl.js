function apiCall(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(time);
    }, time);
  });
}
const promiseList = [apiCall(1000), apiCall(4000), apiCall(2000)];

function promiseAll(promiseList) {
  let noOfPromisesResolved = 0;
  const result = [];
  return new Promise((resolve, reject) => {
    promiseList.forEach((promise, index) => {
      promise
        .then((val) => {
          noOfPromisesResolved++;
          result[index] = val;
          if (noOfPromisesResolved === promiseList.length) {
            resolve(result);
          }
        })
        .catch((err) => reject(err));
    });
  });
}
promiseAll(promiseList).then((res) => console.log(res));
