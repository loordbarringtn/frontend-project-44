import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const instructions = 'What number is missing in the progression?';
const makeArithmeticProgression = (step, membersQuantity) => {
  const result = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= membersQuantity; i++) {
    result.push(i * step);
  }
  return result;
};

const getQuestionAndAnswer = () => {
  const step = getRandomNumber(3);
  const membersQuantity = getRandomNumber(10, 5);
  const progressionArr = makeArithmeticProgression(step, membersQuantity);
  const hiddenIndex = getRandomNumber(membersQuantity - 1);
  const arrayWithHiddenElements = [...progressionArr];
  arrayWithHiddenElements[hiddenIndex] = '..';
  const question = arrayWithHiddenElements.join(' ');
  const correctAnswer = String(progressionArr[hiddenIndex]);

  return [question, correctAnswer];
};

export default () => runGame(instructions, getQuestionAndAnswer);
