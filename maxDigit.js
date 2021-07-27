function maxDigit(value) {
  var n = value.toString();
  var result = [];
  for (var i = 0; i < n.length; i++) {
    var t = parseInt(n[i]);
    result[i] = t;
  }
  var max = Math.max.apply(null, result);
  return max;
}
