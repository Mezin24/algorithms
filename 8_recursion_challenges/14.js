function fib1(num) {
  let arr = [1, 1];

  for (let i = 2; i < num - 1; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr[arr.length - 1] + arr[arr.length - 2];
}
console.log(fib1(4)); // 3
console.log(fib1(10)); // 55
console.log(fib1(28)); // 317811
console.log(fib1(35)); // 9227465

function fib2(num) {
  let start = 1;
  let end = 1;

  for (let i = 2; i < num - 1; i++) {
    let temp = end;
    end = end + start;
    start = temp;
  }

  return start + end;
}
console.log(fib2(4)); // 3
console.log(fib2(10)); // 55
console.log(fib2(28)); // 317811
console.log(fib2(35)); // 9227465

function fib(num) {
  if (num <= 2) return 1;

  return fib(num - 1) + fib(num - 2);
}
console.log(fib(4)); // 3
console.log(fib(10)); // 55
console.log(fib(28)); // 317811
console.log(fib(35)); // 9227465
