class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(data) {
    this.items.push(data);
  }
  dequeue() {
    return this.items.shift();
  }
  front() {
    return this.items[0];
  }
  rear() {
    return this.items[this.items.length - 1];
  }
  //Check if queue is empty
  isEmpty = () => {
    return this.items.length == 0;
  };

  //Return the size of the queue
  size = () => {
    return this.items.length;
  };

  //Print the queue
  print = () => {
    console.log(this.items.toString());
  };
}
