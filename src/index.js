import readlineSync from 'readline-sync';
import determineEvenOrNot from './games/brainEvenFunction.js';
import getRandomOperator from './games/brainCalcFunction.js';

const askAndGreetUser = () => {
  console.log('Welcome to the Brain game!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;

const runGame = (gameName) => {
  let instructions;
  let attemptsNumber = 3;
  let randomNumber = 0;
  let randomNumber1 = 0;
  let randomNumber2 = 0;
  let correctAnswer = '';
  let operator = '';

  const name = askAndGreetUser();

  switch (gameName) {
    case 'brain-calc':
      instructions = 'What is the result of the expression?';
      break;
    case 'brain-even':
      instructions = 'Answer "yes" if the number is even, otherwise answer "no"';
      break;
    default:
      throw new Error(`Unknown game: ${gameName}`);
  }

  console.log(instructions);

  while (attemptsNumber > 0) {
    switch (gameName) {
      case 'brain-calc':
        randomNumber1 = getRandomNumber();
        randomNumber2 = getRandomNumber();
        operator = getRandomOperator();
        randomNumber = `${randomNumber1} ${operator} ${randomNumber2}`;

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
        randomNumber = getRandomNumber();
        correctAnswer = determineEvenOrNot(randomNumber);
        break;
      default:
        throw new Error(`Unknown game: ${gameName}`);
    }

    console.log(`Question: ${randomNumber}`);
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
