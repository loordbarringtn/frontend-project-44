import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const instructions = 'What is the result of the expression?';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * operators.length);
  return operators[randomIndex];
};

const getQuestionAndAnswer = () => {
  let correctAnswer = 0;

  const randomNumber1 = getRandomNumber(100);
  const randomNumber2 = getRandomNumber(100);
  const operator = getRandomOperator();
  const question = `${randomNumber1} ${operator} ${randomNumber2}`;

  switch (operator) {
    case '+':
      correctAnswer = String(randomNumber1 + randomNumber2);
      break;
    case '-':
      correctAnswer = String(randomNumber1 - randomNumber2);
      break;
    case '*':
      correctAnswer = String(randomNumber1 * randomNumber2);
      break;
    default:
      throw new Error(`Unknown operator: ${operator}`);
  }

  return [question, correctAnswer];
};

export default () => runGame(instructions, getQuestionAndAnswer);
