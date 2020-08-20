const OddSum = (number) => {
  let array = [];
  while (number >= 0) {
    number % 2 && array.push(number);
    number -= 1;
  }
  return array.reduce((a, b) => a + b, 0);
};

console.log(OddSum(5));
