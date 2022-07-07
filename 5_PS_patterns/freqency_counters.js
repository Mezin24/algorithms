const same = (arr1, arr2) => {
  const positions = [];

  for (let i = 0; i < arr1.length; i++) {
    const square = arr1[i] ** 2;

    for (let j = 0; j < arr2.length; j++) {
      if (square === arr2[j] && !positions.includes(j)) {
        positions.push(j);
        break;
      }
    }
  }

  return arr1.length === positions.length;
};

console.log(same([1, 2, 3], [4, 1, 9]));
console.log(same([1, 2, 3], [1, 9]));
console.log(same([1, 2, 1], [4, 4, 1]));
