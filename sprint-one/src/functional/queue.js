var Queue = function() {
  var someInstance = {};
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below



  someInstance.enqueue = function(value) {
    var keys = Object.keys(storage);
    var max = Math.max(...keys);
    if (max === -Infinity) {
      max = 0;
    } else {
      max++;
    }
    storage[max] = value;
  };


  someInstance.dequeue = function() {
    var keys = Object.keys(storage);
    var min = Math.min(...keys);
    if (min === Infinity) {
      min = 0;
    }
    var tempVal = storage[min];
    delete storage[min];
    return tempVal;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
