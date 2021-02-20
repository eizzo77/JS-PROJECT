// forEach , Map, Filter implementations using objs fors and array.
// I use array of numbers for the solution.
const myCustomArr = {
  arr: [10, 20, 30, 40, 50, 60, 70],
  // forEach kinda method, taking a callback as a parameter.
  // the callback method can send parameters like array element, index, and the array itself.
  customForEach(callBack) {
    for (let i = 0; i < this.arr.length; i++) {
      callBack(this.arr[i], i, this.arr);
    }
  },
  // taking a callBack func just like forEach, this time returns the mapped arr
  // declared inside the method.
  customMap(callBack) {
    mappedArr = new Array(this.arr.length);
    for (let i = 0; i < this.arr.length; ++i) {
      mappedArr[i] = callBack(this.arr[i], i, this.arr);
    }
    return mappedArr;
  },
  // like map and filter, taking a callBack func as paramter.
  // returns the array declared inside the function with the elements that
  // passed the condition given by the callBack method.
  customFilter(callBack) {
    filteredArr = {};
    let j = 0;
    for (let i = 0; i < this.arr.length; ++i) {
      if (callBack(this.arr[i], i, this.arr)) {
        filteredArr[j++] = this.arr[i];
      }
    }
    return Object.values(filteredArr);
  },
};

// a demonstration of how the customforEach Method invokes the callBack func when element and index passed
// as parameters.
myCustomArr.customForEach((x, i) => console.log(`${x} has the index of ${i}`));
// another example this the array itself is also passed as parameter.
myCustomArr.customForEach((x, i, a) => {
  if (i % 2 === 0) {
    console.log(
      `now the index is ${i} which is even so lets print the array! ${a}`
    );
  }
});
// examples using customMap:
console.log(myCustomArr.customMap((x) => x / 10)); // [1,2,3,4,5,6,7]
console.log(myCustomArr.customMap((x, i, a) => x * i + a));
// using customFilter
console.log(myCustomArr.customFilter((x) => (x / 2) % 2 !== 0));
console.log(myCustomArr.customFilter((_, i) => i % 3 === 0));
