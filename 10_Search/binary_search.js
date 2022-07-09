// const binaryNumSearch = (arr, num) => {
//   let left = 0;
//   let right = arr.length - 1;

//   while (left <= right) {
//     let middle = Math.floor((right + left) / 2);
//     if (arr[middle] === num) return middle;
//     if (num < arr[middle]) {
//       right = middle - 1;
//     } else {
//       left = middle + 1;
//     }
//   }

//   return -1;
// };

// function binaryNumSearch(arr, val, start = 0, end = arr.length - 1) {
//   const mid = Math.floor((start + end) / 2);

//   if (val === arr[mid]) {
//     return mid;
//   }

//   if (start >= end) {
//     return -1;
//   }

//   return val < arr[mid]
//     ? binaryNumSearch(arr, val, start, mid - 1)
//     : binaryNumSearch(arr, val, mid + 1, end);
// }

const binaryNumSearch = (arr, val, start = 0, end = arr.length - 1) => {
  let middle = Math.floor((start + end) / 2);

  if (arr[middle] === val) return middle;

  if (start >= end) {
    return -1;
  }

  return val > arr[middle]
    ? binaryNumSearch(arr, val, middle + 1, end)
    : binaryNumSearch(arr, val, start, middle - 1);
};

console.log(binaryNumSearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
console.log(binaryNumSearch([1, 3, 5, 6, 8, 9, 12, 22, 23, 32], 12));
console.log(binaryNumSearch([1, 3, 5, 6, 8, 9, 12, 22, 23, 32], 32));
console.log(binaryNumSearch([1, 3, 5, 6, 8, 9, 12, 22, 23, 32], 4));
console.log(binaryNumSearch([1, 3, 5, 6, 8, 9, 12, 22, 23, 32], 3));
console.log(binaryNumSearch([1, 3, 5, 6, 8, 9, 12, 22, 23, 32], 1));
