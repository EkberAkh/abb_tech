let ops = ["5", "2", "C", "D", "+"];
let ops2 = ["5", "-2", "4", "C", "D", "9", "+", "+"];
let ops3 = ["1", "C"];

// first solution:
// const calPoints = (operations) => {
//   const scores = [];

//   const finalScore = operations.reduce((sum, element) => {
//     if (element === "+") {
//       const score = scores[scores.length - 1] + scores[scores.length - 2];
//       scores.push(score);
//       return sum + score;
//     } else if (element === "D") {
//       const score = scores[scores.length - 1] * 2;
//       scores.push(score);
//       return sum + score;
//     } else if (element === "C") {
//       const deletedScore = scores.pop();
//       return sum - deletedScore;
//     } else {
//       const score = parseInt(element);
//       scores.push(score);
//       return sum + score;
//     }
//   }, 0);

//   return finalScore;
// };

// console.log(calPoints(ops));
// console.log(calPoints(ops2));
// console.log(calPoints(ops3));
//----------------------------------------------------------------
//second solution:

// const calPoints = (ops) => {
//     let scores = []
//     let sum = 0
//   for (let i = 0; i < ops.length; i++) {
//     const element = ops[i];
//     if (element === "+") {
//         let score = scores[scores.length -1] + scores[scores.length -2]
//         scores.push(score)
//         sum += score
//     }else if(element === 'D'){
//         let score = scores[scores.length - 1] * 2
//         scores.push(score)
//         sum += score
//     }else if (element === 'C'){
//         let deletedScore = scores.pop()
//         sum -= deletedScore
//     }
//     else{
//         let score = parseInt(element)
//         scores.push(score)
//         sum += score
//     }
//   }
//   return sum
// };
// console.log(calPoints(ops));
// console.log(calPoints(ops2));
// console.log(calPoints(ops3));
// -----------------------------------------------------------------
