// const countUniqueValues = (arr) => {
//   return new Set(arr).size;
// };

// const countUniqueValues = (arr) => {
//   let count = 0;
//   let first = 0;
//   let second = 1;

//   if (arr[first] && arr[second]) {
//     count++;
//   }

//   while (second < arr.length) {
//     if (arr[first] === arr[second]) {
//       second++;
//     } else if (arr[first] < arr[second]) {
//       count++;
//       first = second;
//     }
//   }

//   return count;
// };

// const countUniqueValues = (arr) => {
//   let i = 0;
//   let j = 1;

//   if (arr.length === 0) {
//     return 0;
//   }

//   while (j < arr.length) {
//     if (arr[i] === arr[j]) {
//       j++;
//     } else if (arr[i] < arr[j]) {
//       i++;
//       arr[i] = arr[j];
//     }
//   }

//   return i + 1;
// };

const countUniqueValues = (arr) => {
  let i = 0;

  if (arr.length === 0) {
    return 0;
  }

  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }

  return i + 1;
};

console.log(countUniqueValues([1, 1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([1]));
console.log(countUniqueValues([-2, -1, -1, 0, 1]));
