var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};

};


Stack.prototype.push = function(value) {
  this.storage[this.size()] = value;
};

Stack.prototype.pop = function() {
  var indexToRemove = this.size();
  indexToRemove--;
  var toRemove = this.storage[indexToRemove];
  delete this.storage[indexToRemove];
  return toRemove;
};

Stack.prototype.size = function() {
  return Object.keys(this.storage).length;
};