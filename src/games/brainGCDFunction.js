// Функция для нахождения всех делителей числа
const getDivisors = (number) => {
  const divisors = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= number; i++) {
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
  // eslint-disable-next-line no-plusplus
  for (let i = divisorsA.length - 1; i >= 0; i--) {
    if (divisorsB.includes(divisorsA[i])) {
      greatestCommonDivisor = divisorsA[i];
      break;
    }
  }

  return greatestCommonDivisor;
};

export default getGCD;
