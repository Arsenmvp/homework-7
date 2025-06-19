function createMP3(brand, memory, color) {
  return {
    brand,
    memory,
    color,
    play(song) {
      console.log(`${this.brand} грає: ${song}`);
    },
    info() {
      console.log(`${this.brand}, ${this.memory}GB, ${this.color}`);
    }
  };
}

let sony = createMP3("Sony", 8, "black");
let apple = createMP3("Apple", 16, "white");

sony.play("Imagine Dragons");
apple.info();
