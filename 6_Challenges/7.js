function maxSubarraySum(arr, subLength) {
  // add whatever parameters you deem necessary - good luck!
  if (arr.length < subLength) {
    return null;
  }

  let maxSum = -Infinity;
  let temp = 0;
  for (let i = 0; i < subLength; i++) {
    temp += arr[i];
  }
  maxSum = temp;

  for (let i = 1; i <= arr.length - subLength; i++) {
    temp = temp - arr[i - 1] + arr[i + subLength - 1];
    maxSum = Math.max(temp, maxSum);
  }

  return maxSum;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2));
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2));
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2));
console.log(maxSubarraySum([2, 3], 3));

function maxSubarraySum1(arr, subLength) {
  if (arr.length < subLength) {
    return null;
  }

  let max = -Infinity;

  for (let i = 0; i <= arr.length - subLength; i++) {
    let temp = 0;
    for (let j = 0; j < subLength; j++) {
      temp += arr[i + j];
    }
    max = Math.max(max, temp);
  }

  return max;
}

console.log(maxSubarraySum1([100, 200, 300, 400], 2));
console.log(maxSubarraySum1([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));
console.log(maxSubarraySum1([-3, 4, 0, -2, 6, -1], 2));
console.log(maxSubarraySum1([3, -2, 7, -4, 1, -1, 4, -2, 1], 2));
console.log(maxSubarraySum1([2, 3], 3));
