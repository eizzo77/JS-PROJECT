const Tester = require("./utils.js");
const tester = new Tester();
// the Recursive solution
const getRequiredNumOfYrs = (pO, percent, aug, p) => {
  return pO >= p
    ? 0
    : getRequiredNumOfYrs(pO + (pO * percent) / 100 + aug, percent, aug, p) + 1;
};
// Classic solution using while loop
const requiredYearsLoop = (pO, per, aug, p) => {
  let sumOfYrs = 0;
  while (pO < p) {
    pO += (pO * per) / 100 + aug + 1;
    sumOfYrs++;
  }
  return sumOfYrs;
};
console.log(tester.test(getRequiredNumOfYrs(1000, 2, 50, 1200), 3));
console.log(tester.test(getRequiredNumOfYrs(1500, 5, 100, 5000), 15));
console.log(tester.test(getRequiredNumOfYrs(1500000, 2.5, 10000, 2000000), 10));
console.log(
  tester.test(requiredYearsLoop(1500000000, 2.5, 10000, 2000000), 10) // false, 0 years returned.
);
console.log(tester.test(requiredYearsLoop(1000, 2, 50, 1200), 3));
console.log(tester.test(requiredYearsLoop(1500, 5, 100, 5000), 15));
