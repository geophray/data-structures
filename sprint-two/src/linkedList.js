var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {

    var newNode = new Node(value);

    if (this.tail !== null) {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    if (this.tail === null) {
      this.tail = newNode;
      this.head = newNode;
    }

  };

  list.removeHead = function() {
    var tempHead = this.head.value;
    this.head = this.head.next;
    return tempHead;
  };

  list.contains = function(target) {

    if (this.head.next === null) return false;
    if (this.head.value === target) return true;

    var currentNode = this.head;

    while (currentNode !== null)
    {
      if (currentNode.value === target){
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;


    // var nextNode = this.head.next;
    // if (currentNode.next.value === target) {
    //   return true;
    // } else {
    //   // currentNode.next
    //   return nextNode.contains(target);
    // }

  };

  return list;
};

var Node = function(value, ) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
