const data = require("fs").readFileSync(0, "utf-8").trim();
// Convert input into lowercase
const str = data.toLowerCase();
let vowels = 0;
let consonants = 0;
for (let i = 0; i < str.length; i++) {
  let ch = str[i];
  if (ch >= "a" && ch <= "z") {
    if ("aeiou".includes(ch)) {
      vowels++;
    } else {
      consonants++;
    }
  }
}
console.log(`Vowels: ${vowels} Consonants:${consonants}`);
