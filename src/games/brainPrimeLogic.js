import runGame, { getRandomNumber } from '../index.js';

const instructions = 'Answer "yes" if given number is prime. Otherwise answer "no"';

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

const getQuestionAndAnswer = () => {
  const number = getRandomNumber(100);
  const question = number;
  const correctAnswer = isNumberIsPrime(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => runGame(instructions, getQuestionAndAnswer);
