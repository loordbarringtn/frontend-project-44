import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const instructions = 'Find the greatest common divisor of given numbers.';

const getDivisors = (number) => {
  const divisors = [];
  for (let i = 1; i <= number; i += 1) {
    if (number % i === 0) {
      divisors.push(i);
    }
  }
  return divisors;
};

// Функция для нахождения НОД путем сравнения массивов делителей
const getGCD = (a, b) => {
  const divisorsA = getDivisors(a);
  const divisorsB = getDivisors(b);

  // Найти наибольший общий делитель путем сравнения массивов
  let greatestCommonDivisor = 1;
  for (let i = divisorsA.length - 1; i >= 0; i -= 1) {
    if (divisorsB.includes(divisorsA[i])) {
      greatestCommonDivisor = divisorsA[i];
      break;
    }
  }

  return greatestCommonDivisor;
};

const getQuestionAndAnswer = () => {
  const randomNumber1 = getRandomNumber(100);
  const randomNumber2 = getRandomNumber(100);
  const question = `${randomNumber1} ${randomNumber2}`;
  const correctAnswer = String(getGCD(randomNumber1, randomNumber2));

  return [question, correctAnswer];
};

export default () => runGame(instructions, getQuestionAndAnswer);
