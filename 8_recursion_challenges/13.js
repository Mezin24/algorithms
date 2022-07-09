// SAMPLE INPUT/OUTPUT

function recursiveRange(num) {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    sum += i;
  }
  return sum;
}
console.log(recursiveRange(6)); // 21
console.log(recursiveRange(10)); // 55

function recursiveRange1(num) {
  if (num === 0) return 0;
  return num + recursiveRange1(num - 1);
}
console.log(recursiveRange1(6)); // 21
console.log(recursiveRange1(10)); // 55
