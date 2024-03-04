class Queue {
  constructor() {
    this.result = [];
  }

  async #timer() {
    return Math.floor(Math.random() * 10) + 1;
  }

  #processOrder(item, time) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(`${item} done in ${time} second`), time);
    });
  }

  async start(list) {
    try {
      let i = 0;
      if (i < list.length) {
        while (i < list.length) {
          let time = await this.#timer();

          await this.#processOrder(list[i], time).then((res) =>
            console.log(res)
          );
          console.log(i);
          //   await setTimeout(
          //     () => this.result.push(`${list[i]} done in ${time} second`),
          //     time
          //   );
          //   this.#processOrder(list[i], time);

          i++;
        }
      } else {
        throw "Tidak ada order";
      }
    } catch (err) {
      throw err;
    }
  }
}

module.exports = Queue;
