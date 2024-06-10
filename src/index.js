import readlineSync from 'readline-sync';
import determineEvenOrNot from './games/brainEvenFunction.js';

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
  let correctAnswer = '';

  const name = askAndGreetUser();

  if (gameName === 'brain-even') {
    instructions = 'Answer "yes" if the number is even, otherwise answer "no"';
  }

  console.log(instructions);

  while (attemptsNumber > 0) {
    if (gameName === 'brain-even') {
      randomNumber = getRandomNumber();
      correctAnswer = determineEvenOrNot(randomNumber);
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
