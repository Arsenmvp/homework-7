function MP3Player(brand, memory, color) {
  this.brand = brand;
  this.memory = memory;
  this.color = color;
  this.play = function(song) {
    console.log(`${this.brand} відтворює ${song}`);
  };
  this.describe = function() {
    console.log(`MP3: ${this.brand}, ${this.memory}GB, ${this.color}`);
  };
}

let player1 = new MP3Player("Samsung", 4, "blue");
let player2 = new MP3Player("Sony", 16, "black");

player1.play("Linkin Park");
player2.describe();
