const factorial = (num) => {
  if (num === 1) {
    return 1;
  }
  return num * factorial(num - 1);
};
console.log(factorial(4));

const factorial1 = (num) => {
  let sum = 1;
  for (let i = num; i > 0; i--) {
    sum *= i;
  }
  return sum;
};

console.log(factorial1(4));
