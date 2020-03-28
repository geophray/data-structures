var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  if (!this._storage[index]) {
    this._storage[index] = [];
  }

  var bucket = this._storage[index];

  for (var i = 0; i < this._storage[index].length; i++) {
    if (bucket[i][0] === k) {
      bucket[i][1] = v;
    }
  }

  bucket.push([k, v]);

  this.resize();

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage[index];

  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }

};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage[index];

  this._storage[index] = _.reject(bucket, function sort(element) {

    if (element[0] === k) {
      return true;
    }

    return false;

  });

  this.resize();

};

HashTable.prototype.resize = function() {



};





/*
 * Complexity: What is the time complexity of the above functions?
 */


