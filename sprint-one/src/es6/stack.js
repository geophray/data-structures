class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  push(value) {
    this.storage[this.size()] = value;
  }

  pop() {
    var indexToRemove = this.size();
    indexToRemove--;
    var toRemove = this.storage[indexToRemove];
    delete this.storage[indexToRemove];
    return toRemove;
  }

  size() {
    return Object.keys(this.storage).length;
  }

}
