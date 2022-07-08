const minSubArrayLen = (arr, num) => {};

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));
// console.log(minSubArrayLen([2, 1, 6, 5, 4], 9));
// console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52));
// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39));
// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55));
// console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11));
// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95));

// const minSubArrayLen = (arr, int) => {
//   let minLength = Infinity;

//   for (let i = 0; i < arr.length; i++) {
//     let tempSum = 0;
//     let tempLength = 0;
//     for (let j = i; j < arr.length; j++) {
//       tempSum += arr[j];
//       tempLength++;
//       if (tempSum >= int) {
//         minLength = Math.min(minLength, tempLength);
//         break;
//       }
//     }
//   }

//   return isFinite(minLength) ? minLength : 0;
// };
