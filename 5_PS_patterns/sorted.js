// const search = (arr, value) => {
//   return arr.findIndex((el) => el === value);
// };

const search = (arr, value) => {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);

    if (arr[middle] === value) {
      return middle;
    } else if (arr[middle] > value) {
      max = middle - 1;
    } else {
      min = middle + 1;
    }
  }

  return -1;
};

console.log(search([1, 2, 3, 4, 5, 6], 4));
console.log(search([1, 2, 3, 4, 5, 6], 6));
console.log(search([1, 2, 3, 4, 5, 6], 11));
console.log(search([1, 2, 3, 4, 5, 6, 7, 9, 11, 12, 33, 34, 36, 38], 11));
