class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  //Add new item in the linkedlist
  append(data) {
    let node = new Node(data),
      current;
    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
    }
    this.length++;
  }

  //Remove item from any position
  removeAt(pos) {
    if (pos > -1 && pos < this.length) {
      let current = this.head,
        previous,
        index = 0;
      if (pos == 0) {
        this.head = this.head.next;
      } else {
        while (index !== pos) {
          previous = current;
          current = current.next;
          index++;
        }
        previous.next = current.next;
        this.length--;
        return current.data;
      }
    } else {
      return null;
    }
  }
  //Add item at any position
  insertAt = function (pos, elm) {
    if (pos >= 0 && pos <= this.length) {
      let node = new Node(elm),
        current = this.head,
        previous,
        index = 0;
      if (pos === 0) {
        node.next = this.head;
        this.head = node;
      } else {
        while (pos !== index) {
          previous = current;
          current = current.next;
          index++;
        }
      }
    } else {
      return null;
    }
  };
  //Print item of the string
  toString = function () {
    let current = this.head,
      string = '';
    while (current) {
      string += current.data + (current.next ? '\n' : '');
      current = current.next;
    }
    return string;
  };

  //Convert list to array
  toArray = function () {
    let arr = [];
   let current = this.head;
    while (current) {
      arr.push(current.data);
      current = current.next;
    }
    return arr;
  };

  //Get the indexOf item
  indexOf = function (elm) {
    let current = this.head,
      index = 0;
    while (current) {
      if (current.data == elm) {
        return index;
      }
      current = current.next;
      index++;
    }
    return -1;
  };
  //Delete an item from the list
  delete = (elm) => {
    return this.removeAt(this.indexOf(elm));
  };
  //Delete first item from the list
  deleteHead = function () {
    let current = this.head;
    if (!current) {
      return true;
    }
    if (current.next) {
      this.head = current.next;
    } else {
      this.head = null;
    }
    return true;
  };

  //Delete last item from the list
  deleteTail = function () {
    let current = this.head;
    if (!current) {
      return true;
    }
    while (current.next) {
      if (!current.next.next) {
        current.next = null;
      } else {
        current = current.next;
      }
    }

    return true;
  };
  //Find the item in the list
  isPresent = (elm) => {
    return this.indexOf(elm) !== -1;
  };
  //Check if list is empty
  isEmpty = function () {
    return this.length === 0;
  };

  //Get the size of the list
  size = function () {
    return this.length;
  };
  //Get the head of the list
  getHead = function () {
    return this.head;
  };
}
let ll = new LinkedList();
ll.append('prashant');
ll.append('anil');
ll.append('29');
console.log(ll.toArray());

//Remove 'anil' from the list
ll.removeAt(1);
console.log(ll.toArray());

//Remove the first element from the list
ll.deleteHead();
console.log(ll.toArray());