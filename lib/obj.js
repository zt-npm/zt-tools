var obj = {};

obj.union = function(obj1, obj2) {
  var _obj = {};

  for (var k in obj1) {
    _obj[k] = obj1[k];
  }

  for (var k in obj2)
    if (!obj[k])
      _obj[k] = obj2[k];

  return _obj;
}

obj.intersection = function(obj1, obj2) {
  var _obj = {};

  for (var k1 in obj1)
    for (var k2 in obj2)
      if (k1 == k2)
        _obj[k1] = obj1[k1];

  return _obj;
}

obj.removeElement = function(obj, el) {
  var _obj = {};

  for (var k in obj)
    if (el != obj[k])
      _obj[k] = obj[k];

  return _obj;
}

module.exports = obj;
