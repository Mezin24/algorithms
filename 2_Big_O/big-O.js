function stringReverse(str) {
  const arr = [];
  for (let i = str.length; i >= 0; i--) {
    arr.push(str[i]);
  }
  return arr.join('');
}
console.log(stringReverse('Hello World!'));

const calcNumSum = (num) => {
  let sum = 0;

  for (let i = 0; i <= num; i++) {
    sum += i;
  }

  return sum;
};
console.log(calcNumSum(3));

const calcNumSum2 = (num) => {
  return new Array(num)
    .fill(1)
    .map((item, i) => item * (i + 1))
    .reduce((acc, cur) => acc + cur, 0);
};
console.log(calcNumSum2(100));

const printAllPairs = (num) => {
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= i; j++) {
      console.log(`${j} / ${i}`);
    }
  }
};

printAllPairs(100);
