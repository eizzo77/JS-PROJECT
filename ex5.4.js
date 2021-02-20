// the one liner Javascript solution (that Prettier extension makes it look like the following)
const toWeirdCase = (str) =>
  str
    .split(" ")
    .map((w) =>
      w
        .split("")
        .map((l, i) => (i % 2 === 0 ? l.toUpperCase() : l.toLowerCase()))
        .join("")
    )
    .join(" ");
// an Alternative using replace with regex as first parameter and replacer method as the second
// in the replacer method we take the matched letters from each word and using the offset we
// can check their index.
const toWeirdCaseAlternative = (str) =>
  str
    .split(" ")
    .map((w) =>
      w.replace(/\w/g, (m, offset) =>
        offset % 2 === 0 ? m.toUpperCase() : m.toLowerCase()
      )
    )
    .join(" ");
// classic approach
const toWeirdCaseClassic = (str) => {
  let weirdCaseStr = "";
  for (let i = 0, j = 0; i < str.length; ++i) {
    if (str[i] !== " ") {
      weirdCaseStr += j % 2 === 0 ? str[i].toUpperCase() : str[i].toLowerCase();
      j++;
    } else {
      weirdCaseStr += " ";
      j = 0;
    }
  }
  return weirdCaseStr;
};
console.log(toWeirdCase("String"));
console.log(toWeirdCase("Weird string case"));
console.log(toWeirdCaseClassic("Weird string case"));
console.log(toWeirdCaseAlternative("Weird string case"));
console.log(toWeirdCaseAlternative("aNoThEr Weird STRING cAsE"));
