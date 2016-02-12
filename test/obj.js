var Foo = function () {
  var a = 1;
  var b = 21;
  var f = function() {
    console.log('foo', b);
  }
}
var obj = new Object();
var foo = new Foo();

console.log('Object.leo:', Object.leo);
console.log('obj.leo:', obj.leo);
console.log('Function.leo:', Function.leo);
console.log('Foo.leo:', Foo.leo);
console.log('foo.leo:', foo.leo);

console.log("***************");

Foo.prototype.leo = 'leo';
// Object.prototype.leo = 'leo';
// Function.prototype.leo = 'leo';

console.log('Object.leo:', Object.leo);
console.log('obj.leo:', obj.leo);
console.log('Function.leo:', Function.leo);
console.log('Foo.leo:', Foo.leo);
console.log('foo.leo:', foo.leo);

console.log("***************");

console.log(Foo.prototype.__proto__ == Object.prototype);
console.log(foo.__proto__.__proto__ == Object.prototype);
console.log(Function.prototype.__proto__ == Object.prototype);
