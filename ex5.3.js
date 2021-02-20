// splitting by - or _ then mapping each word (except the first one) to a new word with starting with
// an uppercased letter.
const toCamelCase = (s) =>
  s
    .split(/[_-]/g)
    .map((x, i) => (i !== 0 ? x.charAt(0).toUpperCase() + x.slice(1) : x))
    .join("");
// classic approach
const toCamelCaseClassic = (s) => {
  camelCased = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "_" || s[i] === "-") {
      camelCased += s[i + 1].toUpperCase();
      i++;
    } else {
      camelCased += s[i];
    }
  }
  return camelCased;
};

//tests
console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("The_Stealth_Warrior"));
console.log(toCamelCase("hello_my-Name-is_itay"));
console.log(toCamelCaseClassic("The_Stealth_Warrior"));
console.log(toCamelCaseClassic("the_stealth_warrior"));
console.log(toCamelCaseClassic("hello_my-Name-is_itay"));
