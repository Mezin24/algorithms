function sameFrequency(num1, num2) {
  const countFrequency1 = {};
  const countFrequency2 = {};

  const digits1 = num1.toString().split('');
  const digits2 = num2.toString().split('');

  if (digits1.length !== digits2.length) {
    return false;
  }

  for (let i = 0; i < digits1.length; i++) {
    countFrequency1[digits1[i]] = (countFrequency1[digits1[i]] || 0) + 1;
  }

  for (let i = 0; i < digits2.length; i++) {
    countFrequency2[digits2[i]] = (countFrequency2[digits2[i]] || 0) + 1;
  }

  for (let key in countFrequency1) {
    if (!countFrequency2.hasOwnProperty(key)) {
      return false;
    }
    if (countFrequency2[key] !== countFrequency1[key]) {
      return false;
    }
  }

  return true;
}

console.log(sameFrequency(182, 281));
console.log(sameFrequency(34, 14));
console.log(sameFrequency(3589578, 5879385));
console.log(sameFrequency(22, 222));
