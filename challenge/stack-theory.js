class Stack {
  constructor() {
    this.items = {};
    this.top = 0;
  }

  push(item) {
    this.top++;
    this.items[this.top] = item;
  }

  pop() {
    let deleteData;
    if (this.top) {
      deleteData = this.items[this.top];
      delete this.items[this.top];
      this.top--;
      return deleteData;
    }

    return;
  }

  getSize() {
    return this.top;
  }

  isEmpty() {
    return this.getSize() ? false : true;
  }

  peek() {
    return this.isEmpty() ? null : this.items[this.getSize()];
  }

  print() {
    let pila = [];
    for (const key in this.items) {
      if (Object.hasOwnProperty.call(this.items, key)) {
        const element = this.items[key];
        pila.push(element);
      }
    }

    return pila
      .reverse()
      .map((item) => item)
      .join(' | ');
  }
}

const stack = new Stack();

stack.push('plato #1');
stack.push('plato #2');
stack.push('plato #3');

//console.log(stack.pop());

console.log(stack);
console.log(stack.getSize());
console.log(stack.isEmpty());
console.log(stack.peek());
console.log(stack.print());
