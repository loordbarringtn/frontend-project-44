#!/usr/bin/env node
import readlineSync from 'readline-sync';
import askAndGreetUser from '../src/cli.js';

let attemptsNumber = 3;
let randomNumber = 0;

console.log('Welcome to the Brain game!');

const name = askAndGreetUser();
console.log('Answer "yes" if the number is even, otherwise answer "no"');

const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;

const determineEvenOrNot = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

while (attemptsNumber > 0) {
  randomNumber = getRandomNumber();
  console.log(`Question: ${randomNumber}`);
  const answer = String(readlineSync.question('Your answer: '));

  if (determineEvenOrNot(randomNumber) === answer) {
    console.log('Correct!');
    // eslint-disable-next-line no-plusplus
    attemptsNumber--;
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${determineEvenOrNot(randomNumber)}'.`);
    console.log(`Let's try again, ${name}!`);
    break;
  }
  if (attemptsNumber === 0) {
    console.log(`Congratulations, ${name}!`);
  }
}

console.log(getRandomNumber());
