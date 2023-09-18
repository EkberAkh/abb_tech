const words = ["level", "radar", "text", "river", "madam", "sales", "mom"];
const reversedWords = [];

let reversedWord = "";
for (let i = 0; i < words.length; i++) {
  reversedWord = "";
  for (let j = words[i].length; j >= 0, j--; ) {
    reversedWord += words[i][j];
  }
  if (reversedWord === words[i]) {
    reversedWords.push(reversedWord);
  }
}

console.log(reversedWords,`the count of polindrome words: ${reversedWords.length}`);
// --------------------------------------------------------------------------------------
// //with methods
// let reversedWords = [];
// let reversedWord = "";
// for (let i = 0; i < words.length; i++) {
//   reversedWord = words[i].split("").reverse().join("");
//   if (words[i] === reversedWord) {
//     reversedWords.push(reversedWord);
//   }
// }
// console.log(reversedWords);
// console.log(
//   `the number of polindrome words in array is: ${reversedWords.length}`
// );