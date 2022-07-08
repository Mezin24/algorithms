const averagePair = (arr, average) => {
  if (arr.length < 2) {
    return false;
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i === j) continue;

      if ((arr[i] + arr[j]) / 2 === average) return true;
    }
  }
  return false;
};

console.log(averagePair([1, 2, 3], 2.5));
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1));
console.log(averagePair([], 4));

/////////////////////////////////////////////
const averagePair1 = (arr, average) => {
  if (arr.length < 2) {
    return false;
  }

  let start = 0;
  let end = arr.length - 1;

  while (start !== end) {
    if ((arr[start] + arr[end]) / 2 === average) {
      return true;
    } else if ((arr[start] + arr[end]) / 2 > average) {
      end--;
    } else {
      start++;
    }
  }

  return false;
};

console.log(averagePair1([1, 2, 3], 2.5));
console.log(averagePair1([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
console.log(averagePair1([-1, 0, 3, 4, 5, 6], 4.1));
console.log(averagePair1([], 4));
