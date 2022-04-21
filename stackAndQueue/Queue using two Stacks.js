class Queue {
  constructor() {
    this.s1 = [];
    this.s2 = [];
  }

  /**
   * @param {number} x
   */
  enqueue(x) {
    //code here
    this.s1.push(x);
  }

  /**
   * @return {number}
   */
  dequeue() {
    //code here
    if (this.s2.length === 0) {
      while (this.s1.length) {
        this.s2.push(this.s1.pop());
      }
      return this.s2.pop();
    } else {
      return this.s2.pop();
    }
  }
}
