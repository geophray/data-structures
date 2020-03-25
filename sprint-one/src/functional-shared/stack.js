var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = {};
  storage.i = 0;
  _.extend(storage, Stack.stackMethods);

  var keys = Object.keys(storage);
  return storage;

};

// var extend = function(to, from) {
//   for (var key in from) {
//     to[key] = from[key];
//   }
// };

// delegated fallback object
Stack.stackMethods = {};

Stack.stackMethods.push = function(value) {
  this.storage[this.i] = value;
  this.i++;
};

Stack.stackMethods.pop = function() {
  this.i--;
  if (this.i < 0) { this.i = 0; }
  return this.storage[this.i];
};

Stack.stackMethods.size = function() {
  // return Object.keys(this.storage).length;
  // var keyCount = Object.keys(this.storage).length;
  // return keyCount;
  return this.length;
};


