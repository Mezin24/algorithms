// const same = (arr1, arr2) => {
//   const positions = [];

//   for (let i = 0; i < arr1.length; i++) {
//     const square = arr1[i] ** 2;

//     for (let j = 0; j < arr2.length; j++) {
//       if (square === arr2[j] && !positions.includes(j)) {
//         positions.push(j);
//         break;
//       }
//     }
//   }

//   return arr1.length === positions.length;
// };

const same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  const counter1 = {};
  const counter2 = {};

  for (let key of arr1) {
    counter1[key] = (counter1[key] || 0) + 1;
  }
  for (let key of arr2) {
    counter2[key] = (counter2[key] || 0) + 1;
  }

  for (let key in counter1) {
    if (!counter2.hasOwnProperty(key ** 2)) {
      return false;
    }

    if (counter2[key ** 2] !== counter1[key]) {
      return false;
    }
  }

  return true;
};

console.log(same([1, 2, 3], [4, 1, 9]));
console.log(same([1, 2, 3], [1, 9]));
console.log(same([1, 2, 1], [4, 4, 1]));
