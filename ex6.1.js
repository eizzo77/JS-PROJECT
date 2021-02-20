// using split and map, then join with an '-'
const accum = (str) =>
  str
    .split("")
    .map((x, i, arr) => x.toUpperCase() + x.toLowerCase().repeat(i))
    .join("-");
// another alternative using replacer..
// not the best version of this kind of solution but still ;D
const accumReplace = (str) =>
  str.replace(
    /([a-zA-Z])/g,
    (_, p, offset, str) =>
      p.toUpperCase() +
      p
        .toLowerCase()
        .repeat(offset)
        .concat(offset < str.length - 1 ? "-" : "")
  );

// tests
console.log(accum("aBcD"));
console.log(accum("RqaEzty"));
console.log(accum("cwAt"));
console.log(accumReplace("cwAt"));
console.log(accumReplace("lMNOP"));
console.log(accumReplace("a"));
