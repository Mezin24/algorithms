const search = (arr, value) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
};

console.log(search([1, 2, 3, 4, 5, 6, 7], 4));
console.log(search([1, 2, 3, 4, 5, 6, 7], -4));
console.log(search(['pavel', 'mike', 'alex'], 'mike'));
console.log(search(['pavel', 'mike', 'alex'], 'mie'));
