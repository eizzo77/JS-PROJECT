// using match and joining with a dot between.
const abbreviateTwoWords = (name) => name.match(/[A-Z]/g).join(".");
// using replace
const abbreviateTwoWordsReplace = (name) =>
  name.replace(/[a-z]/g, "").replace(" ", ".");
// filtering the capital letters then joining
const abbreviateTwoWordsFilter = (name) =>
  name
    .split("")
    .filter((x) => x !== " " && x === x.toUpperCase())
    .join(".");
// classic using for loop
const abbreviateTwoWordsClassic = (name) => {
  let abb = name[0] + ".";
  let i = 1;
  while (name[i] !== " ") {
    i++;
  }
  abb += name[++i];
  return abb;
};
// tests
console.log(abbreviateTwoWords("Itay Zaguri"));
console.log(abbreviateTwoWords("Sam Harris"));
console.log(abbreviateTwoWords("Patrick Feeney"));
console.log(abbreviateTwoWordsReplace("Marshall Mathers"));
console.log(abbreviateTwoWordsFilter("Sam Harris"));
console.log(abbreviateTwoWordsFilter("Itay Zaguri"));
console.log(abbreviateTwoWordsClassic("Itay Zaguri"));
console.log(abbreviateTwoWordsClassic("Patrick Feeney"));
