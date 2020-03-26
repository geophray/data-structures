var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var methods = {};
  methods.storage = {};
  _.extend(methods, stackMethods);

  var keys = Object.keys(methods.storage);
  return methods;

};

// delegated fallback object
stackMethods = {};

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


