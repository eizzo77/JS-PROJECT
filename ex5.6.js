// one liner using padStart
const maskify = (str) => str.slice(str.length - 4).padStart(str.length, "#");
// using split and map
const maskifyMap = (str) =>
  str
    .split("")
    .map((x, i, arr) => (i < arr.length - 4 ? "#" : x))
    .join("");
// using Array.from
const maskifyArrayFrom = (str) =>
  Array.from({ length: str.length }, (x, i) =>
    i < str.length - 4 ? "#" : str[i]
  ).join("");
// even using reduce
const maskifyReduce = (str) =>
  str
    .split("")
    .reduce((a, b, i, arr) => (a += i < arr.length - 4 ? "#" : b), "");
// using replacer and Regex... not the best solution but still an option
const maskifyRegex = (str) =>
  str.replace(
    new RegExp(
      "(.{" +
        (str.length - 4) +
        "})(.{" +
        (str.length - (str.length - 4)) +
        "})",
      "g"
    ),
    (m, p1, p2) => p1.replace(/./g, "#") + p2
  );
// using slice and replace
const maskifySlice = (str) =>
  str.slice(0, str.length - 4).replace(/./g, "#") + str.slice(str.length - 4);
// classic approach
const maskifyClassic = (str) => {
  outStr = "";
  for (let i = 0; i < str.length; ++i) {
    outStr += i < str.length - 4 ? "#" : str[i];
  }
  return outStr;
};

// tests
console.log(maskify("Hello"));
console.log(maskify("0452856854542020"));
console.log(maskify("Using Pad"));
console.log(maskifyMap("0452856854542020"));
console.log(maskifyMap("This is a Map"));
console.log(maskifyArrayFrom("Some Array From"));
console.log(maskifyReduce("This Is Reduce"));
console.log(maskifyReduce("Hey"));
console.log(maskifyReduce("Four"));
console.log(maskifyRegex("This Is Regex"));
console.log(maskifyRegex("12345"));
console.log(maskifyRegex("0452856854542020"));
console.log(maskifyRegex("Itay"));
console.log(maskifySlice("123456789"));
console.log(maskifySlice("slicing and dicing"));
console.log(maskifySlice("1234"));
console.log(maskifyClassic("This is A Classic one"));
