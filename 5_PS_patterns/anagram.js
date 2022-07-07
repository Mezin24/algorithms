// const validAnagram = (str1, str2) => {
//   if (str1.length !== str2.length) {
//     return false;
//   }

//   const freakCounter1 = {};
//   const freakCounter2 = {};

//   str1.split('').forEach((char) => {
//     freakCounter1[char] = (freakCounter1[char] || 0) + 1;
//   });
//   str2.split('').forEach((char) => {
//     freakCounter2[char] = (freakCounter2[char] || 0) + 1;
//   });

//   for (let key in freakCounter1) {
//     if (!freakCounter2.hasOwnProperty(key)) {
//       return false;
//     }

//     if (freakCounter1[key] !== freakCounter2[key]) {
//       return false;
//     }
//   }

//   return true;
// };

const validAnagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < str1.length; i++) {
    const letter = str1[i];

    lookup[letter] = (lookup[letter] || 0) + 1;
  }

  for (let j = 0; j < str2.length; j++) {
    const letter = str2[j];
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
};

console.log(validAnagram('', ''));
console.log(validAnagram('aaz', 'zza'));
console.log(validAnagram('anagram', 'nagaram'));
console.log(validAnagram('rat', 'car'));
console.log(validAnagram('awesome', 'awesom'));
