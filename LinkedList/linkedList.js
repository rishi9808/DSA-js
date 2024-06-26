class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
}

LinkedList.prototype.insertAtBeginning = function (data) {
  const newNode = new Node(data);
  newNode.next = this.head; // Link the new node to the current head
  this.head = newNode; // Update the head to the new node
};

LinkedList.prototype.insertAtEnd = function (data) {
  const newNode = new Node(data);

  if (!this.head) {
    this.head = newNode;
    return;
  }

  let last = this.head;

  while (last.next) {
    last = last.next;
  }
  last.next = newNode;
};

LinkedList.prototype.insertAtAny = function (data, position) {
  const newNode = new Node(data);

  if (position === 0) {
    newNode.next = this.head;
    this.head = newNode;
    return;
  }

  let current = this.head;
  let prev = null;
  let curr_pos = 0;

  while (current && curr_pos < position) {
    prev = current;
    current = current.next;
    curr_pos++;
  }

  if (curr_pos === position) {
    prev.next = newNode;
    newNode.next = current;
  } else {
    console.log("position out of bound");
  }
};

LinkedList.prototype.insertAfter = function (prevData, data) {
  if (!prevData) {
    console.log("prev data cannot be null");
    return;
  }
  let current = this.head;
  while (current) {
    if (current.data == prevData) {
      const newNode = new Node(data, current.next);
      current.next = newNode;
      return;
    }
    current = current.next;
  }

  return "data not found in the list";
};

LinkedList.prototype.display = function () {
  let current = this.head;
  let result = [];

  while (current !== null) {
    result.push(current.data);
    current = current.next;
  }

  console.log(result);
  return result.join("->");
};

LinkedList.prototype.deleteBeginning = function () {
  if (!this.head) {
    return;
  }
  this.head = this.head.next;
};

LinkedList.prototype.deleteEnd = function () {
  if (!this.head) {
    return; //if list empty
  }
  if (!this.head.next) {
    this.head = null;
    return; //if there is only one node
  }

  let secondLast = this.head;
  while (secondLast.next.next) {
    secondLast = secondLast.next;
  }

  secondLast.next = null;
};

LinkedList.prototype.deleteAtKey = function (key) {
  if (!this.head) {
    console.log("list empty");
    return;
  }

  if (this.head.data === key) {
    this.head = this.head.next;
    return;
  }

  let current = this.head;

  while (current.next !== null) {
    if (current.next.data === key) {
      current.next = current.next.next;
      return;
    }

    current = current.next;
  }
  console.log("No node found with key", key);
};

// reverse a linked list

LinkedList.prototype.reverse = function () {
  let current = this.head;
  let prev = null;
  let next = null;

  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  current = prev;
  this.head = current;
};

// Example usage
const ll = new LinkedList();

ll.insertAtBeginning(10);
ll.insertAtBeginning(20);
ll.insertAtEnd(13);
ll.insertAtBeginning(12);
ll.insertAfter(10, 15);
ll.display(); // Output: [12, 20, 10, 12]
ll.deleteAtKey(10)
ll.display()
ll.reverse();
ll.display();
