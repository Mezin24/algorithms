// const maxSubarraySum = (arr, num) => {
//   let maxSum = -Infinity;

//   if (arr.length < num) {
//     return null;
//   }

//   for (let i = 0; i <= arr.length - num; i++) {
//     let sum = 0;
//     for (let j = i; j < i + num; j++) {
//       sum += arr[j];
//     }
//     if (sum > maxSum) {
//       maxSum = sum;
//     }
//   }

//   return maxSum;
// };

const maxSubarraySum = (arr, num) => {
  let maxSum = 0;
  let tempSum = 0;

  if (arr.length < num) {
    return null;
  }

  for (let i = 0; i < num; i++) {
    tempSum += arr[i];
  }
  maxSum = tempSum;

  for (let j = num; j < arr.length; j++) {
    tempSum = tempSum - arr[j - num] + arr[j];
    maxSum = Math.max(tempSum, maxSum);
  }

  return maxSum;
};

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2));
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4));
console.log(maxSubarraySum([4, 2, 1, 6], 1));
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4));
console.log(maxSubarraySum([], 4));
