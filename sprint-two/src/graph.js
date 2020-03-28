// Instantiate a new graph
var Graph = function() {

  //this.edges = {};
  this.nodes = {};
  this.edges = [];

};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) { //O(1)

  this.nodes[node] = node;

  //nodes[key][value];
  //nodes[node][fromNode];
  //nodes[node][toNode];

};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) { // O(1)
  return this.nodes.hasOwnProperty(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) { // O(n)

  this.edges = _.reject(this.edges, function sort(element) {

    return element.fromNode === node ||
    element.toNode === node;

  });


  delete this.nodes[node];
  //return this.nodes.filter(element => element !== node);
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) { // O(n)

  return _.reduce(this.edges, function(wasFound, element) {

    if (wasFound) {
      return true;
    }
    return element.fromNode === fromNode && element.toNode === toNode || element.fromNode === toNode && element.toNode === fromNode;

  }, false);

};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) { // O(1)

  var newObj = {};

  newObj.fromNode = fromNode; //{fromNode: 7, toNode: 8}
  newObj.toNode = toNode;
  this.edges.push(newObj);

};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) { // O(n)

  this.edges = _.reject(this.edges, function sort(element) {

    return element.fromNode === fromNode && element.toNode === toNode ||
    element.fromNode === toNode && element.toNode === fromNode;

  });

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) { // O(n)
  var args = arguments;
  _.each(this.nodes, function (args) {
    cb(args);
  });
};

/*
 * Complexity: What is the time complexity of the above functions? O(1) && O(n)
 */


