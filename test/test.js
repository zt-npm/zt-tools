var _ = require('lodash');
//
// var a = {
//   b: [{
//     aa: 1
//   }, {
//     bb: 2
//   }]
// }


var test = [1,{a:1},44];
console.log(_.pullAt(test, 1));
console.log(test);
