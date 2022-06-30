Stack.prototype.sort = function () {
  //code here

  const tempStack = [];
  while (this.stack.length) {
    const val = this.stack.pop();
    while (tempStack.length && val < tempStack[tempStack.length - 1]) {
      this.stack.push(tempStack.pop());
    }
    tempStack.push(val);
  }
  return tempStack;
};

