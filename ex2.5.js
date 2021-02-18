const Tester = require("./utils.js");
const tester = new Tester();
// the 'JavaScriptic' approach - construct an Array on spot with the length of n, then map its elements to numbers from 1 ... n. then execute reduce on that array.
// this approach takes O(n) due to mapping and reducing n times. cons - array should be allocated.
const summanation = (n) =>
  Array.from({ length: n }, (_, x) => x + 1).reduce((a, b) => a + b);

// the recursive approach - no allocations for an array and takes O(n) as well.
const summanationRecursive = (n) => {
  return n === 1 ? 1 : summanationRecursive(n - 1) + n;
};
// the classic approach using while loop - takes O(n) and no array allocation needed
const summanationClassic = (n) => {
  let sum = 1;
  while (n > 1) {
    sum += n;
    n--;
  }
  return sum;
};

console.log(tester.test(summanation(10), 55));
console.log(tester.test(summanationRecursive(6), 21));
console.log(tester.test(summanationClassic(3), 6));
