// the simplest solution ever - literally using the repeat method.
const repeat_str = (n, str) => str.repeat(n);
// classic approach
const repeat_str_Classic = (n, str) => {
  repeatedStr = "";
  for (let i = 0; i < n; i++) {
    repeatedStr += str;
  }
  return repeatedStr;
};
console.log(repeat_str(5, "Na "));
console.log(repeat_str_Classic(2, "Bi"));
