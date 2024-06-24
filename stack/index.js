class Stack {
  constructor() {
    this.stack = [];
  }

  push(data) {
    this.stack.push(data);
  }

  pop() {
    this.stack.pop();
  }

  length() {
    this.stack.length();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  viewStack() {
    return this.stack;
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  clear() {
    this.stack = [];
  }

  contains(element) {
    return this.stack.includes(element);
  }

  reverse() {
    this.stack.reverse();
  }

  printStack() {
    return this.stack.join();
  }
}

const stack = new Stack();

stack.push(3);
stack.push(4);
stack.push(2);
stack.push(1);
stack.pop();
console.log(stack.viewStack());
console.log(stack.peek());
console.log(stack.isEmpty());
stack.reverse();
let str = stack.printStack();
