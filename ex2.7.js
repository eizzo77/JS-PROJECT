const Tester = require("./utils.js");
const tester = new Tester();
// creating a map with operators as keys and the operation required in form of annonymous methods as values.
const map = new Map([
  ["+", (a, b) => a + b],
  ["-", (a, b) => a - b],
  ["/", (a, b) => (b ? a / b : "can't divide by Zero!")],
  ["*", (a, b) => a * b],
]);
// getting the given operator's method and return the result.
// this approach is very flexible & maintenable. making it easy to change / add operators.
const doBasicMath = (operator, num1, num2) =>
  map.has(operator) ? map.get(operator)(num1, num2) : "invalid operator";
// the straight forward approach, using Switch. handling invalid operators is very simple thanks to 'default'.
const doBasicMathSwitch = (operator, num1, num2) => {
  let result;
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num2
        ? num1 / num2
        : "stop trying to divide by Zero it won't work!";
      break;
    default:
      result = "not a valid operator... (at least among the basic 4 ones...)";
  }
  return result;
};

console.log(tester.test(doBasicMath("*", 2, 3), 6));
console.log(tester.test(doBasicMath("-", 15, 10), 5));
console.log(tester.test(doBasicMath("+", 0, 0), 0.00000000000000001)); // false.. returns 0
console.log(tester.test(doBasicMath("^", 20, 2), "invalid operator"));
console.log(tester.test(doBasicMath("/", 20, 0), "can't divide by Zero!"));
console.log(
  tester.test(
    doBasicMathSwitch("$", 150, 0),
    "not a valid operator... (at least among the basic 4 ones...)"
  )
);
console.log(
  tester.test(
    doBasicMathSwitch("/", 20, 0),
    "stop trying to divide by Zero it won't work!"
  )
);
