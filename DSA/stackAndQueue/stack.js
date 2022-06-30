class Stack {
  constructor() {
    this.items = [];
  }
  push = function (data) {
    this.items.push(data);
  };
  pop = function () {
    return this.items.pop();
  };
  peek = function () {
    return this.items[this.items.length - 1];
  };
  isEmpty = function () {
    return this.items.length === 0;
  };
  clear = function () {
    this.items.length = 0;
  };
  size = function () {
    return this.items.length;
  };
}
