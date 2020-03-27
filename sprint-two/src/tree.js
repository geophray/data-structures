var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  _.extend(newTree, treeMethods);
  // your code here
  newTree.children = []; // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var myNewTree = new Tree(value);
  this.children.push(myNewTree);

};

treeMethods.contains = function(target) {

  var exists = false;

  if (target === this.value) { exists = true; }

  if (exists === false) {

    for (var i = 0; i < this.children.length; i++) {

      if (this.children[i].value === target) {
        exists = true;
        break;
      }

      if (exists === false) {
        exists = this.children[i].contains(target);
      }
    }
  }
  return exists;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
