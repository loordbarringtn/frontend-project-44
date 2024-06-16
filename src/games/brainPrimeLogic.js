const isNumberIsPrime = (number) => {
  if (number <= 1) {
    return false;
  }
  // eslint-disable-next-line no-plusplus
  for (let i = 2, max = Math.sqrt(number); i <= max; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

export default isNumberIsPrime;
