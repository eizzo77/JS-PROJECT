const Tester = require("./utils.js");
const tester = new Tester();
// using Math lib - returning the next natural number of the given year divided by 100 (century)
const getCentury = (year) => Math.ceil(year / 100);
//

console.log(tester.test(getCentury(1705), 18));
console.log(tester.test(getCentury(1900), 19));
console.log(tester.test(getCentury(1601), 17));
console.log(tester.test(getCentury(2000), 20));
console.log(tester.test(getCentury(2100), 22));
console.log(tester.test(getCentury(10000), 100));
console.log(tester.test(getCentury(12001), 121));
console.log(tester.test(getCentury(12501), 126));
console.log(tester.test(getCentury(11000), 110));
console.log(tester.test(getCentury(55), 1));
console.log(tester.test(getCentury(100), 2));
