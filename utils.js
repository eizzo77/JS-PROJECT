module.exports = class Tester {
  test = (testCase, output) => {
    let valReturned = testCase;
    return valReturned === output || `false! returned ${valReturned}`;
  };
};
