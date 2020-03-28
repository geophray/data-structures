var BinarySearchTree = function(value) {

  var bst = Object.create(stackMethods);
  bst.value = value;
  bst.left = undefined; // less than
  bst.right = undefined; // greather than
  return bst;

};


var stackMethods = {};

stackMethods.insert = function(value) {

  if (this.value > value) {
    if (this.left === undefined) {
      this.left = BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  }
  if (this.value < value) {
    if (this.right === undefined) {
      this.right = BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
};

stackMethods.contains = function(value) { // O(log n)

  if (this.value === value) {
    return true;
  } else if (this.value < value && this.right !== undefined) {
    return this.right.contains(value);
  } else if (this.value > value && this.left !== undefined) {
    return this.left.contains(value);
  } else {
    return false;
  }



};

stackMethods.depthFirstLog = function(callback) {

  callback(this.value);

  if (this.left !== undefined) {
    this.left.depthFirstLog(callback);
  }


  if (this.right !== undefined) {
    this.right.depthFirstLog(callback);
  }

};

/*
 * Complexity: What is the time complexity of the above functions? O(log n)
 */
