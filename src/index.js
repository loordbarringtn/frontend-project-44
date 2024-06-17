import readlineSync from 'readline-sync';

export const getRandomNumber = (max, min = 1) => Math.floor(Math.random() * (max - min + 1)) + min;

const runGame = (instructions, getQuestionAndAnswer) => {
  let attemptsNumber = 3;
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(instructions);

  while (attemptsNumber > 0) {
    const [question, correctAnswer] = getQuestionAndAnswer();

    console.log(`Question: ${question}`);
    const answer = String(readlineSync.question('Your answer: '));

    if (answer === correctAnswer) {
      console.log('Correct!');
      attemptsNumber -= 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${(correctAnswer)}'.`);
      return console.log(`Let's try again, ${userName}!`);
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default runGame;
