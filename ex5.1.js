// using slice.
const trimmingStringSlice = (s) => s.slice(1, s.length - 1);
// using substring.
const trimmingStringSS = (s) => s.substring(1, s.length - 1);
// using split then pop & shift.
const trimmingStringSplit = (s) => {
  let a = s.split("");
  a.pop();
  a.shift();
  return a.join("");
};
// classic solution .. costly in terms of allocation though.
const trimmingStringClassic = (s) => {
  outputStr = new String();
  for (let i = 0; i < s.length - 2; i++) {
    outputStr += s[i + 1];
  }
  return outputStr;
};

console.log(trimmingStringSlice("Itay"));
console.log(trimmingStringSlice("the yellow goat jumped over the sleepy lion"));
console.log(trimmingStringSS("the yellow goat jumped over the sleepy lion"));
console.log(trimmingStringSplit("the yellow goat jumped over the sleepy lion"));
console.log(
  trimmingStringClassic("the yellow goat jumped over the sleepy lion")
);
