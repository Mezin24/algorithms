const charCount = (string) => {
  const uniqueChar = {};
  const english = /^[A-Za-z]*$/;

  string
    .toLowerCase()
    .split('')
    .filter((el) => english.test(el))
    .sort()
    .forEach((char) => {
      if (!uniqueChar.hasOwnProperty(char)) {
        uniqueChar[char] = 1;
      } else {
        uniqueChar[char]++;
      }
    });

  return uniqueChar;
};

console.log(charCount('jsnfjsdnJFDKG ; ! dsf, fjksndkl 2133'));
