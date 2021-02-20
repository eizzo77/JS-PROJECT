const Tester = require("./utils.js");
const tester = new Tester();
// using a set to get distinct letters then sort and join.
const longest = (a, b) => [...new Set(a + b)].sort().join("");
// another way using for in loop.
const longestAlternative = (a, b) => {
  distinctStr = "";
  mergedStr = a + b;
  for (const l of mergedStr) {
    distinctStr += distinctStr.includes(l) ? "" : l;
  }
  return distinctStr.split("").sort().join("");
};
console.log(
  tester.test(
    longestAlternative("xyaabbbccccdefww", "xxxxyyyyabklmopq"),
    "abcdefklmopqwxy"
  )
); // true abcdefklmopqwxy
console.log(tester.test(longestAlternative("", ""), "")); // true ""
console.log(tester.test(longestAlternative("ab", "cd"), "abcd")); // true "abcd"
console.log(
  tester.test(
    longest("xyaabbbccccdefww", "xxxxyyyyabklmopq"),
    "abcdefklmopqwxy"
  )
); // true abcdefklmopqwxy
console.log(
  tester.test(
    longest("abcdefghijklmnopqrstuvwxyz", "abcdefghijklmnopqrstuvwxyz"),
    "abcdefghijklmnopqrstuvwxyz"
  )
); // true abcdefghijklmnopqrstuvwxyz
