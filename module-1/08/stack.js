class Stack {
  #maxSize;
  #container = [];

  constructor(maxSize = 10) {
    this.#maxSize = maxSize;
  }

  #isFull() {
    return this.#container.length >= this.#maxSize;
  }

  #isEmpty() {
    return this.#container.length === 0;
  }

  push(element) {
    if (this.#isFull()) return console.log("Container sudah penuh");

    this.#container.push(element);
  }

  pop() {
    if (this.#isEmpty())
      return console.log(
        "Sudah tidak ada data didalam container yang bisa diremove"
      );

    this.#container.pop();
  }

  getElement() {
    return this.#container;
  }
}

const stack = new Stack(5);

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(3);
stack.push(3);
stack.push(3);

console.log(stack.getElement());

stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.pop();

console.log(stack.getElement());

let arr = [];
arr.push("test");
arr.push("test1");

console.log(arr);

arr.pop();
console.log(arr);
