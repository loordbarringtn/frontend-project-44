// eslint-disable-next-line consistent-return
const isNumberPrime = (number) => {
  if (number <= 1) {
    return 'no';
  }
  // eslint-disable-next-line no-plusplus
  for (let i = 2, max = Math.sqrt(number); i <= max; i++) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

export default isNumberPrime;
