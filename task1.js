let calculator = {
  read() {
    this.a = +prompt("Введіть перше число:");
    this.b = +prompt("Введіть друге число:");
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  }
};
