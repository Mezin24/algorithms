// const includeOdds = (arr) => {
//   const odds = [];

//   const checkOdd = (helperInput) => {
//     if (helperInput.length === 0) {
//       return;
//     }

//     if (helperInput[0] % 2 !== 0) {
//       odds.push(helperInput[0]);
//     }

//     checkOdd(helperInput.slice(1));
//   };

//   checkOdd(arr);

//   return !!odds.length;
// };

const includeOdds = (arr) => {
  if (arr.length === 0) return false;

  if (arr[0] % 2 !== 0) return true;

  return includeOdds(arr.slice(1));
};

console.log(includeOdds([2, 4, 8, 7, 6]));
