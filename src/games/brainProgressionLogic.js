const makeArithmeticProgression = (step, membersQuantity) => {
  const result = [];
  for (let i = 1; i <= membersQuantity; i++) {
    result.push(i * step);
  }
  return result;
};

export default makeArithmeticProgression;
