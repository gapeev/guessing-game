class GuessingGame {
  constructor() {}

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  guess() {
    this.attempt = Math.round((this.min + this.max) / 2);
    return this.attempt;
  }

  lower() {
    this.max = this.attempt;
  }

  greater() {
    this.min = this.attempt;
  }
}

module.exports = GuessingGame;
