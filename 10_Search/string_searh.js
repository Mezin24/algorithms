function stringSearch(str1, str2) {
  let count = 0;
  let metch = 0;

  for (let i = 0; i < str1.length; i++) {
    if (str1[i] === str2[metch]) {
      metch++;
      if (metch === str2.length) {
        count++;
        metch = 0;
      }
    } else {
      metch = 0;
    }
  }
  return count;
}

// function stringSearch(str1, str2) {
//   let count = 0;
//   for (let i = 0; i < str1.length; i++) {
//     for (let j = 0; j < str2.length; j++) {
//       if (str1[i + j] === str2[j]) {
//         if (j === str2.length - 1) {
//           count++;
//         }
//       } else {
//         break;
//       }
//     }
//   }
//   return count;
// }

console.log(stringSearch('hello my name is pavel and i am from obnins', 'ame'));
console.log(
  stringSearch('hello my name is hello and i am hello obnins', 'hello')
);
