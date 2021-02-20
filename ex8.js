const Tester = require("./utils.js");
const tester = new Tester();
// one liner using the mathematical formula
const findPerimeter = (width, length) => 2 * width + 2 * length;

// tests
console.log(tester.test(findPerimeter(6, 7), 26));
console.log(tester.test(findPerimeter(20, 10), 60));
console.log(tester.test(findPerimeter(2, 9), 22));
