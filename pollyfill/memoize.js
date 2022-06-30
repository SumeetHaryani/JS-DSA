function fact(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * fact(n - 1);
}

function memoize(func) {
  let cache = {};
  return function () {
    const args = JSON.stringify(arguments);
    if (cache[args]) {
      return cache[arguments];
    } else {
      const result = func.apply(null, arguments);
      cache[args] = result;
      return result;
    }
  };
}
let memoizedFact = memoize(fact);
console.log(memoizedFact(5));
console.log(memoizedFact(5));
console.log(memoizedFact(5));
