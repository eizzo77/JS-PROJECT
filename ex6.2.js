// one liner using filter
const countDuplicates = (str) =>
  str
    .toLowerCase()
    .split("")
    .filter(
      (x, i, arr) =>
        i === arr.indexOf(x) && arr.indexOf(x) !== arr.lastIndexOf(x)
    ).length;
// using an memo obj and split and forEach
const countDuplicatesObj = (str) => {
  memo = {};
  str
    .toLowerCase()
    .split("")
    .forEach((x) => (memo[x] ? memo[x]++ : (memo[x] = 1)));
  return Object.keys(memo).filter((x) => memo[x] > 1).length;
};

// tests
console.log(countDuplicates("indivisibility")); // 1
console.log(countDuplicates("aabBcde")); // 2
console.log(countDuplicates("abcde")); // 0
console.log(countDuplicatesObj("abcde")); // 0
console.log(countDuplicatesObj("indivisibility")); // 1
console.log(countDuplicatesObj("aabBcde")); // 2
console.log(countDuplicatesObj("aabbcde")); // 2
console.log(countDuplicatesObj("aA11")); // 2
console.log(countDuplicatesObj("")); // 0
