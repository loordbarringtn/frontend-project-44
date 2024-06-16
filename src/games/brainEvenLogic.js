import runGame, { getRandomNumber } from '../index.js';

const instructions = 'Answer "yes" if the number is even, otherwise answer "no"';

const isNumberIsEven = (number) => number % 2 === 0;

const getQuestionAndAnswer = () => {
  const number = getRandomNumber(100);
  const question = number;
  const correctAnswer = isNumberIsEven(number) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => runGame(instructions, getQuestionAndAnswer);
