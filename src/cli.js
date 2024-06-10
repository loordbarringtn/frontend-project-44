import readlineSync from 'readline-sync';

const askAndGreetUser = () => {
  console.log('Welcome to the Brain game!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

export default askAndGreetUser;
