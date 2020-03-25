var Stack = function() {

  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var keys = Object.keys(storage);

  //var theSize = Object.size(storage);

  // Implement the methods below
  someInstance.push = function(value) {
    storage[someInstance.size()] = value;
  };

  someInstance.pop = function() {
    var indexToRemove = someInstance.size();
    indexToRemove--;
    var toRemove = storage[indexToRemove];
    delete storage[indexToRemove];
    return toRemove;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
