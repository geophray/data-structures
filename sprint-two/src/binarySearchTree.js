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

stackMethods.contains = function(value) {

  if (this.value === value) {
    return true;
  } else if (this.value < value && this.value.right !== undefined) {
    return this.right.contains(value);
  } else if (this.value > value && this.value.left !== undefined) {
    return this.left.contains(value);
  } else {
    return false;
  }



};

stackMethods.depthFirstLog = function(value) {



};

/*
 * Complexity: What is the time complexity of the above functions?
 */
