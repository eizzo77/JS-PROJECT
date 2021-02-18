const Tester = require("./utils.js");
const tester = new Tester();
// using Math and Number libs - first check if the given number is indeed an integer then its square root slightly increased,
// then ceil it to the next Natural number, then return the power of it.
const findNextSquare = (num) =>
  Number.isInteger(Math.sqrt(num))
    ? Math.pow(Math.ceil(Math.sqrt(num) + 0.1), 2)
    : -1;
//

console.log(tester.test(findNextSquare(114), -1)); // 114 is not a complete square.
console.log(tester.test(findNextSquare(121), 144)); // returns 141 as expected.
console.log(tester.test(findNextSquare(5), 3)); // returns -1 since its not a complete square.. not 3 .
// console.log(tester.test());
