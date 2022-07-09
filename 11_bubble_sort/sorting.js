function numSort(arr) {
  const sortedArr = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < sortedArr.length; j++) {
      if (arr[i] < sortedArr[j]) {
        sortedArr.splice(j, 0, arr[i]);
        break;
      }
    }
  }

  return sortedArr;
}

console.log(numSort([23, 45, 6, 12, 13]));
