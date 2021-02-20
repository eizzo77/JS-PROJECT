// same approach i used for fibonacci, just adding the 3 first values from 'signature' array to the beginning of the array
// then we push the sum of the last 3 elements and so on...
const tribonacci = (signature, n) => {
  return Array.from({ length: n }).reduce((a, _, i) => {
    i <= 2 ? a.push(signature[i]) : a.push(a[i - 3] + a[i - 2] + a[i - 1]);
    return a;
  }, []);
};
// **I wont even implement the bad function because it may be too crazy for tribonacci ;o **
// the Classic Memo approach
var memo = [];
const tribonacciClassicMemo = (signature, n) => {
  memo = signature;
  for (let i = 3; i < n; ++i) {
    memo[i] = memo[i - 3] + memo[i - 2] + memo[i - 1];
  }
  return memo;
};

// tests
console.log(tribonacci([1, 1, 1], 10)); // [1,  1,  1,  3,   5, 9, 17, 31, 57, 105]
console.log(tribonacci([0, 0, 1], 10)); // [0, 0, 1, 1, 2, 4, 7, 13, 24, 44]);
console.log(tribonacci([0, 1, 1], 10)); // [0, 1, 1, 2, 4, 7, 13, 24, 44, 81]);
console.log(tribonacci([1, 0, 0], 10)); // [1, 0, 0, 1, 1, 2, 4, 7, 13, 24]);
console.log(tribonacci([0, 0, 0], 10)); // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
console.log(tribonacci([1, 2, 3], 10)); // [1, 2, 3, 6, 11, 20, 37, 68, 125, 230]);
console.log(tribonacci([3, 2, 1], 10)); // [3, 2, 1, 6, 9, 16, 31, 56, 103, 190]);
console.log(tribonacci([1, 1, 1], 1)); // [1]);
console.log(tribonacci([300, 200, 100], 0)); // []);
console.log(tribonacciClassicMemo([1, 1, 1], 10)); // [1,  1,  1,  3,   5, 9, 17, 31, 57, 105]
console.log(tribonacciClassicMemo([1, 2, 3], 10)); // [1, 2, 3, 6, 11, 20, 37, 68, 125, 230]);
