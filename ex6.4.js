// using set and comparing with the original string.
const isIsogram = (str) =>
  [...new Set(str.toLowerCase().split(""))].join("") === str.toLowerCase();
// using findIndex
const isIsogramFind = (str) =>
  str
    .toLowerCase()
    .split("")
    .findIndex((x, _, arr) => arr.indexOf(x) !== arr.lastIndexOf(x)) === -1;
console.log(isIsogram("Dermatoglyphics")); // true
console.log(isIsogram("aba")); // false
console.log(isIsogram("moOse")); // false
console.log(isIsogramFind("Dermatoglyphics")); // true
console.log(isIsogramFind("moOse")); // false
console.log(isIsogramFind("ItaYzAgUri")); // false
console.log(isIsogramFind("")); // true
console.log(isIsogramFind("asdbnm")); // true
