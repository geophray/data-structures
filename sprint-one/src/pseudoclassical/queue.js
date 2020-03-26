var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {

  var keys = Object.keys(this.storage);
  var max = Math.max(...keys);
  if (max === -Infinity) {
    max = 0;
  } else {
    max++;
  }
  this.storage[max] = value;

};

Queue.prototype.dequeue = function() {

  var keys = Object.keys(this.storage);
  var min = Math.min(...keys);
  if (min === Infinity) {
    min = 0;
  }
  var tempVal = this.storage[min];
  delete this.storage[min];
  return tempVal;

};

Queue.prototype.size = function() {

  return Object.keys(this.storage).length;

};

