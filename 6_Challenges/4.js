// const areThereDublicates = (...args) => {
// if (args.length === 0) {
//   return false;
// }

// const incomes = {};

// for (let i = 0; i < args.length; i++) {
//   const arg = args[i];
//   incomes[arg] = (incomes[arg] || 0) + 1;
// }

// for (let key in incomes) {
//   if (incomes[key] > 1) {
//     return true;
//   }
// }
// return false;
// };

// const areThereDublicates = (...args) => {
//   for (let i = 0; i < args.length; i++) {
//     for (let j = i + 1; j < args.length; j++) {
//       if (args[i] === args[j]) {
//         return true;
//       }
//     }
//   }
//   return false;
// };

const areThereDublicates = (...args) => {
  if (args.length <= 1) {
    return false;
  }
  const sorted = [...args].sort();
  let left = 0;
  let right = 1;

  while (right < sorted.length) {
    if (sorted[left] !== sorted[right]) {
      left = right;
      right++;
    } else {
      return true;
    }
  }
  return false;
};
console.log(areThereDublicates(1, 2, 3));
console.log(areThereDublicates(1, 2, 2));
console.log(areThereDublicates('a', 'b', 'c', 'a'));
