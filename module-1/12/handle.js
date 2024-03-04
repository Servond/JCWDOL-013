const Queue = require("./queue");

class Handle extends Queue {
  constructor() {
    super();
    this.list = [];
  }

  add(order) {
    this.list.push(order);
  }
}

const handle = new Handle();

handle.add("order 1");
handle.add("order 2");
handle.add("order 3");
handle.add("order 4");
handle.start(handle.list);
