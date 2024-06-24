class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(data) {
    this.queue.unshift(data);
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  dequeue() {
    if (!this.isEmpty()) {
      this.queue.shift();
    } else {
      return "queue empty";
    }
  }

  peek(){
    if(!this.isEmpty()){
        return this.queue[0]
    }
    else{
        return "queue empty"
    }
  }

  size(){
    return this.queue.length
  }

  clear(){
    return this.queue = []
  }

  viewQueue() {
    if (!this.isEmpty()) {
      return this.queue.join("");
    } else {
      console.log("queue empty");
    }
  }
}

let queue = new Queue();
queue.removeValue();
console.log(queue.viewQueue());
