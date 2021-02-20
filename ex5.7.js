// using split and sort. pretty costly due to sorting. could be O(n^2)
// and extra space for the array.
const shortestWordSort = (str) =>
  str.split(" ").sort((a, b) => a.length - b.length)[0].length;
// using Map and Math.min. could be O(n)
const shortestWordMinMap = (str) =>
  Math.min(...str.split(" ").map((x) => x.length));
// classic
const shortestWordClassic = (str) => {
  let min = -1;
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      counter++;
    } else if (min === -1 || counter < min) {
      min = counter;
      counter = 0;
    }
  }
  return min;
};

// tests
console.log(shortestWordSort("000Hello I $%$#am @The ! best a 513Here")); // 1
console.log(shortestWordSort("11231 2asdasda22 afgdfe")); // 5
console.log(shortestWordMinMap("11231 222 zz")); // 2
console.log(shortestWordMinMap("this is MinMap solution for you .")); // 1
console.log(shortestWordClassic("this is Classic solution for you")); // 2
console.log(shortestWordClassic("this a solution for you")); // 1
