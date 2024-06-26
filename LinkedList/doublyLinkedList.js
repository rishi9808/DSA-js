class Node {
  constructor(data, next = null, prev = null) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
}

DoublyLinkedList.prototype.insertFront = function (data) {
  const newNode = new Node(data, this.head);

  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
    return;
  }

  this.head.prev = newNode;
  //   newNode.next = this.head;
  this.head = newNode;
};

DoublyLinkedList.prototype.insertRear = function (data) {
  const newNode = new Node(data, null, this.tail);

  if (!this.tail) {
    this.head = newNode;
    this.tail = newNode;
    return;
  }

  this.tail.next = newNode;
  //   newNode.prev = this.tail;
  this.tail = newNode;
};

DoublyLinkedList.prototype.insertAfter = function (prevData, data) {
  let current = this.head;

  const newNode = new Node(data);

  while (current && current.next !== null) {
    if (current.data === prevData) {
      newNode.next = current.next;
      current.next.prev = newNode;
      current.next = newNode;
      newNode.prev = current;
      return;
    }
    current = current.next;
  }

  if (current.next == null) {
    current.next = newNode;
    newNode.prev = current;
    this.tail = newNode;
    return;
  }

  console.log("data not in the list");
};

DoublyLinkedList.prototype.deleteBegin = function () {
  if (!this.head) {
    console.log("list empty");
    return;
  }

  if (this.head.next == null) {
    this.head = null;
    this.tail = null;
    return;
  }

  this.head = this.head.next;
  this.head.prev = null;
};

DoublyLinkedList.prototype.deleteEnd = function () {
  if (!this.tail) {
    console.log("list empty");
    return;
  }

  if (this.tail.prev == null) {
    this.tail = null;
    this.head = null;
    return;
  }

  this.tail = this.tail.prev;
  this.tail.next = null;
};

//reverse

DoublyLinkedList.prototype.reverse = function () {
  let current = this.head;

  while (current) {
    //swap
    let temp = current.prev;
    current.prev = current.next;
    current.next = temp;

    current = current.prev;
  }
  let temp = this.head;
  this.head = this.tail;
  this.tail = temp;
};

DoublyLinkedList.prototype.display = function () {
  if (!this.head) {
    return "empty list";
  }
  let result = [];
  let current = this.head;
  while (current) {
    result.push(current.data);
    current = current.next;
  }
  return result.join("->");
};

const dll = new DoublyLinkedList();
dll.insertFront(10);
dll.insertFront(12);
console.log(dll.display());
dll.reverse();
console.log(dll.display());
