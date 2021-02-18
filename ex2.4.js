const Tester = require("./utils.js");
const tester = new Tester();
// a very readibility-friendly solution -
// find the value such that its firstIndex equals its last which mean it appears only once in the array.
// may take at most O(n)
const findUnique = (arr) =>
  arr.find((x, i, arr) => arr.indexOf(x) === arr.lastIndexOf(x));

console.log(tester.test(findUnique([1, 1, 1, 2, 1]), 2)); // returns 2, passed
console.log(tester.test(findUnique([0, 0, 0.55, 0, 0]), 0.55)); // returns 0.55, passed
console.log(tester.test(findUnique([5, 5, 5, 5, 5, 5, 5, 5, -9]), 5)); // false.. -9 is the unique one.
