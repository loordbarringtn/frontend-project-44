const makeArithmeticProgression = (step, membersQuantity) => {
  const result = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= membersQuantity; i++) {
    result.push(i * step);
  }
  return result;
};

export default makeArithmeticProgression;
