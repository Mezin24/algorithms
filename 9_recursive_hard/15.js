function reverse(str) {
  const letterArr = str.split('');
  let result = [];

  (function reverser(arr) {
    if (arr.length === 0) {
      return;
    }

    result.push(arr[arr.length - 1]);

    reverser(arr.slice(0, -1));
  })(letterArr);

  return result.join('');
}

console.log(reverse('awesome')); // 'emosewa'
console.log(reverse('rithmschool')); // 'loohcsmhtir'
