const same = (arr1, arr2) => {
  const postions = [];

  for (let i = 0; i < arr1.length; i++) {
    const squared = arr1[i] ** 2;
    for (let j = 0; j < arr2.length; j++) {
      if (!postions.includes(j) && squared === arr2[j]) {
        postions.push(j);
      }
    }
  }

  return postions.length === arr1.length;
};

console.log(same([1, 2, 3], [4, 1, 9]));
console.log(same([1, 2, 3], [1, 9]));
console.log(same([1, 2, 1], [4, 4, 1]));
