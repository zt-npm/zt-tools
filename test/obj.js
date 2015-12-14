var _obj = require('../lib/obj.js');

var o1 = {
  a: 1,
  b: 2
}

var o2 = {
  a: 11,
  b: 12,
  c: 13
}

var obj1=  _obj.union(o1, o2);
console.log(obj1);

var obj2 = _obj.intersection(o1, o2);
console.log(obj2);

var obj3 = _obj.removeElement(o2, 12);
console.log(obj3);
