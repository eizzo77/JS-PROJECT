const Tester = require("./utils.js");
const tester = new Tester();
// the simplest solution using parseInt 2nd parameter which parses in a base of a given num. o(n) for joining the array and parsing.
const convertBin = (arr) => parseInt(arr.join(""), 2);
// another approach - reversing = o(n) + mapping = o(n) + reducing = o(n) = o(n) solution.
const convertBinMap = (arr) =>
  arr
    .reverse()
    .map((x, i) => x * 2 ** i)
    .reduce((a, b) => a + b);

const convertToBinClassic = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; ++i) {
    sum += arr[i] * 2 ** (arr.length - 1 - i);
  }
  return sum;
};

//tests:
console.log(tester.test(convertBin([1, 1, 1, 1]), 15)); // 15 is right, true.
console.log(tester.test(convertBinMap([1, 0, 1, 0]), 6)); // supposed to be 10 not 6, false.
console.log(tester.test(convertBin([1, 0, 0, 0, 0]), 17)); // supposed to be 16 not 17, false.
console.log(tester.test(convertBinMap([1, 1, 0, 1, 0]), 26)); // 26 is true
console.log(tester.test(convertToBinClassic([1, 1, 0, 1, 0]), 26)); // 26 is true
console.log(tester.test(convertToBinClassic([1, 1, 0, 1, 0]), 25)); // 25 is false
