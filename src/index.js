import readlineSync from 'readline-sync';
import determineEvenOrNot from './games/brainEvenLogic.js';
import getRandomOperator from './games/brainCalcLogic.js';
import getGCD from './games/brainGCDLogic.js';
import makeArithmeticProgression from './games/brainProgressionLogic.js';
import isNumberPrime from './games/brainPrimeLogic.js';

const askAndGreetUser = () => {
  console.log('Welcome to the Brain game!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};
const getRandomNumber = (max, min = 1) => Math.floor(Math.random() * (max - min + 1)) + min;

const runGame = (gameName) => {
  let instructions;
  let attemptsNumber = 3;
  let question = 0;
  let randomNumber1 = 0;
  let randomNumber2 = 0;
  let correctAnswer = '';
  let operator = '';
  let step = 0;
  let membersQuantity = 0;
  let progressionArr = [];
  let hiddenIndex = 0;
  let arrayWithHiddenElements = [];

  const name = askAndGreetUser();

  switch (gameName) {
    case 'brain-calc':
      instructions = 'What is the result of the expression?';
      break;
    case 'brain-even':
      instructions = 'Answer "yes" if the number is even, otherwise answer "no"';
      break;
    case 'brain-gcd':
      instructions = 'Find the greatest common divisor of given numbers.';
      break;
    case 'brain-progression':
      instructions = 'What number is missing in the progression?';
      break;
    case 'brain-prime':
      instructions = 'Answer "yes" if given number is prime. Otherwise answer "no"';
      break;
    default:
      throw new Error(`Unknown game: ${gameName}`);
  }

  console.log(instructions);

  while (attemptsNumber > 0) {
    switch (gameName) {
      case 'brain-calc':
        randomNumber1 = getRandomNumber(100);
        randomNumber2 = getRandomNumber(100);
        operator = getRandomOperator();
        question = `${randomNumber1} ${operator} ${randomNumber2}`;

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
        break;
      case 'brain-even':
        question = getRandomNumber(100);
        correctAnswer = determineEvenOrNot(question);
        break;
      case 'brain-gcd':
        randomNumber1 = getRandomNumber(100);
        randomNumber2 = getRandomNumber(100);
        question = `${randomNumber1} ${randomNumber2}`;
        correctAnswer = String(getGCD(randomNumber1, randomNumber2));
        break;
      case 'brain-progression':
        step = getRandomNumber(3);
        membersQuantity = getRandomNumber(10, 5);
        progressionArr = makeArithmeticProgression(step, membersQuantity);
        hiddenIndex = getRandomNumber(membersQuantity - 1);
        arrayWithHiddenElements = [...progressionArr];
        arrayWithHiddenElements[hiddenIndex] = '..';
        question = arrayWithHiddenElements.join(' ');
        correctAnswer = String(progressionArr[hiddenIndex]);
        break;
      case 'brain-prime':
        question = getRandomNumber(100);
        correctAnswer = isNumberPrime(question);
        break;
      default:
        throw new Error(`Unknown game: ${gameName}`);
    }

    console.log(`Question: ${question}`);
    const answer = String(readlineSync.question('Your answer: '));

    if (answer === correctAnswer) {
      console.log('Correct!');
      // eslint-disable-next-line no-plusplus
      attemptsNumber--;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${(correctAnswer)}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
    if (attemptsNumber === 0) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

export default runGame;
