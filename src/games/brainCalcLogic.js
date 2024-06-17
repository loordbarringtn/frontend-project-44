import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const instructions = 'What is the result of the expression?';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * operators.length);
  return operators[randomIndex];
};

const getCalculatedAnswer = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`Unknown operator: ${operator}`);
  }
};

const getQuestionAndAnswer = () => {
  const randomNumber1 = getRandomNumber(100);
  const randomNumber2 = getRandomNumber(100);
  const operator = getRandomOperator();
  const question = `${randomNumber1} ${operator} ${randomNumber2}`;

  const correctAnswer = String(getCalculatedAnswer(randomNumber1, randomNumber2, operator));

  return [question, correctAnswer];
};

export default () => runGame(instructions, getQuestionAndAnswer);
