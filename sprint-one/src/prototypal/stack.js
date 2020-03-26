var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};

  var keys = Object.keys(someInstance.storage);
  return someInstance;
};


var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.size()] = value;
};

stackMethods.pop = function() {
  var indexToRemove = this.size();
  indexToRemove--;
  var toRemove = this.storage[indexToRemove];
  delete this.storage[indexToRemove];
  return toRemove;
};

stackMethods.size = function() {
  return Object.keys(this.storage).length;
};
