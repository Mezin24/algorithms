function isSubsequence(str1, str2) {
  if (str1.length < 2 || str2.length < 2) {
    return false;
  }

  let first = 0;
  let second = 1;

  while (second < str1.length) {
    const combination = str1[first] + str1[second];
    for (let i = 0; i < str2.length; i++) {
      const substr = str2[i] + str2[i + 1];
      if (combination === substr) {
        return true;
      }
    }
    first++;
    second++;
  }
  return false;
}

console.log(isSubsequence('hello', 'hello world'));
console.log(isSubsequence('sing', 'string'));
console.log(isSubsequence('abc', 'abracadabra'));
console.log(isSubsequence('abs', 'acb'));
console.log(isSubsequence('abs', 'acbs'));
