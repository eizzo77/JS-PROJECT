// using split and sort. pretty costly due to sorting. could be O(n^2)
// and extra space for the array.
const longestWordSort = (str) =>
  str.split(" ").sort((a, b) => b.length - a.length)[0].length;
// using Map and Math.max. could be O(n)
const longestWordMaxMap = (str) =>
  Math.max(...str.split(" ").map((x) => x.length));
// classic
const longestWordClassic = (str) => {
  let max = -1;
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      max = max === -1 || counter > max ? counter : max;
      counter = 0;
    } else {
      counter++;
    }
  }
  return max;
};
//tests
console.log(longestWordSort("000Hello I $%$#am @The ! best a 513Here")); // 8
console.log(longestWordSort("11231 2asdasda22 afgdfe")); // 10
console.log(longestWordMaxMap("11231 222 zz")); // 5
console.log(longestWordMaxMap("this is MinMap solution for you .")); // 8
console.log(longestWordClassic("this is Classic solution for you")); // 8
console.log(
  longestWordClassic("The wise proffessor read the encyclopedia in 2 days")
); // 12
