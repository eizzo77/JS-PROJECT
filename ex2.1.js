const Tester = require("./utils.js");
const tester = new Tester();
// a 'clean' solution in terms of readibility, but takes O(n^2) due to sorting.
// pros - lesser memory allocation & clean code.
const sumOfLowestBySort = (arr) => {
  let sorted = arr.sort((a, b) => a - b);
  return sorted[0] + sorted[1];
};
// a slightly different approach to the above method, takes the same time.
const sumOfLowestBySortShorter = (arr) => {
  let [a, b] = arr.sort((a, b) => a - b);
  return a + b;
};
/// another approach - finding the lowest using Math.min() may take O(n),
/// splicing the lowest off the array may also take O(n) due to rearrangement of the array
/// finding the second lowest using Math.min() again is another O(n) so O(3n) => O(n).
/// cons - bigger memory allocations.
const sumOfLowestMath = (arr) => {
  let lowest = Math.min(...arr);
  arr.splice(arr.indexOf(lowest), 1);
  return lowest + Math.min(...arr);
};
// Classic solution using for loop - takes at most o(n) due to looping,
const sumOfLowestClassic = (arr) => {
  lowest = arr[0];
  secondLowest = arr[1];
  for (let i = 1; i < arr.length; ++i) {
    if (arr[i] < lowest) {
      secondLowest = lowest;
      lowest = arr[i];
    } else if (arr[i] < secondLowest) {
      secondLowest = arr[i];
    }
  }
  return lowest + secondLowest;
};

//tests:
const checkTest = (output, expectedOutput) =>
  output === expectedOutput
    ? true
    : `Supposed to be ${expectedOutput} but returned ${output}`;

console.log(
  checkTest(tester.test(sumOfLowestBySort([19, 5, 42, 2, 77]), 7), true)
);
console.log(
  checkTest(tester.test(sumOfLowestBySortShorter([19, 5, 42, 2, 77]), 7), true)
);
console.log(
  checkTest(tester.test(sumOfLowestMath([19, 5, 42, 2, 77]), 7), true)
);
console.log(
  checkTest(tester.test(sumOfLowestClassic([19, 5, 42, 2, 77]), 7), true)
);
console.log(
  checkTest(tester.test(sumOfLowestClassic([19, 5, 42, 2, 77]), 15), false)
);
console.log(
  checkTest(
    tester.test(
      sumOfLowestClassic([10, 343445353, 3453445, 3453545353453]),
      3453455
    ),
    true
  )
);
console.log(
  checkTest(
    tester.test(
      sumOfLowestBySort([10, 343445353, 3453445, 3453545353453]),
      3453455
    ),
    true
  )
);
console.log(
  checkTest(
    tester.test(
      sumOfLowestBySortShorter([10, 343445353, 3453445, 3453545353453]),
      15
    ),
    false
  )
);
console.log(
  checkTest(
    tester.test(
      sumOfLowestMath([10, 343445353, 3453445, 3453545353453]),
      3453455
    ),
    true
  )
);
console.log(
  checkTest(
    tester.test(
      sumOfLowestClassic([10, 343445353, 3453445, 3453545353453]),
      3453455
    ),
    true
  )
);
