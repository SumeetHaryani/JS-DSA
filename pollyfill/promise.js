class MyPromise {
  constructor(executionFunction) {
    this.promiseChain = [];
    this.handleError = () => {};
    this.onResolve = this.onResolve.bind(this);
    this.onReject = this.onReject.bind(this);
    executionFunction(this.onResolve, this.onReject);
  }
  then(handleSuccess) {
    this.promiseChain.push(handleSuccess);
    return this;
  }
  catch(handleError) {
    this.handleError = handleError;
  }
  onResolve(value) {
    let storedValue = value;
    try {
      this.promiseChain.forEach((nextHandleSuccess, i) => {
        storedValue = nextHandleSuccess(storedValue);
      });
    } catch (error) {
      this.onReject(error);
    }
  }
  onReject(error) {
    this.handleError(error);
  }
}

const promise = new MyPromise((resolve, reject) => {
  if (true) {
    setTimeout(() => resolve('heyy'), 1000);
    // resolve('hi');
  } else {
    setTimeout(() => reject('bye'), 10);
  }
});
promise
  .then((res) => res + 1000)
  .then((res) => res + 500)
  .catch((e) => console.log(e));
