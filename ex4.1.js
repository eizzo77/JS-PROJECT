const Tester = require("./utils.js");
const tester = new Tester();
// creating a Fibonacci Array by creating an Array on spot with length of n then perform reduce on it which outputs a the Fibonnaci Array.
// returning the n-1 element of the array created.
const fibonacci = (n) => {
  return Array.from({ length: n }).reduce((a, _, i) => {
    i < 2 ? a.push(i) : a.push(a[i - 2] + a[i - 1]);
    return a;
  }, [])[n - 1];
};
// the 'simplest' solution yet VERY expensive and not recommended at all. Exponential complexity Time
const fibonacciBad = (n) =>
  n === 1 ? 0 : n === 2 ? 1 : fibonacciBad(n - 2) + fibonacciBad(n - 1);
// for this solution a memo array is created to store the values in order to avoid the exponential time.
var memo = [];
const fibonacciClassicMemo = (n) => {
  memo[0] = 0;
  memo[1] = 1;
  for (let i = 2; i < n; ++i) {
    memo[i] = memo[i - 2] + memo[i - 1];
  }
  return memo[n - 1];
};
// tests
console.log(tester.test(fibonacci(5), 3));
console.log(tester.test(fibonacci(8), 13));
console.log(tester.test(fibonacci(1), 0));
console.log(tester.test(fibonacciClassicMemo(2), 1));
console.log(tester.test(fibonacciClassicMemo(5), 3));
console.log(tester.test(fibonacciClassicMemo(1), 0));
console.log(tester.test(fibonacciClassicMemo(6), 5));
console.log(tester.test(fibonacciClassicMemo(8), 13));
console.log(tester.test(fibonacciClassicMemo(10), 34));
console.log(tester.test(fibonacciBad(5), 3));
console.log(tester.test(fibonacciBad(1), 0));
console.log(tester.test(fibonacciBad(5), 3));
console.log(tester.test(fibonacciBad(6), 5));
