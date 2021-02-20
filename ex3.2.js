const Tester = require("./utils.js");
const tester = new Tester();
// one approach JavaScript style using flat and reduce
const number = (busStops) =>
  busStops.flat().reduce((a, b, i) => (i % 2 === 0 ? a + b : a - b));
// another approach using only reduce
const leftInTheBus = (busStops) =>
  busStops.reduce((a, b) => a + b[0] - b[1], 0);
// classic solution using for loop
const leftInTheBusClassic = (busStops) => {
  pplSum = busStops[0][0];
  for (let i = 1; i < busStops.length; ++i) {
    pplSum += busStops[i][0] - busStops[i][1];
  }
  return pplSum;
};

console.log(
  tester.test(
    number([
      [10, 0],
      [3, 5],
      [5, 8],
    ]),
    5
  )
);
console.log(
  tester.test(
    leftInTheBus([
      [3, 0],
      [9, 1],
      [4, 10],
      [12, 2],
      [6, 1],
      [7, 10],
    ]),
    17
  )
);
console.log(
  tester.test(
    leftInTheBusClassic([
      [3, 0],
      [9, 1],
      [4, 8],
      [12, 2],
      [6, 1],
      [7, 8],
    ]),
    21
  )
);
