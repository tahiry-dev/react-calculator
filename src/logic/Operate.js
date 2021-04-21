import Big from 'big.js';

const plus = (a, b) => `${a.plus(b)}`;

const subtract = (a, b) => a.minus(b).valueOf();

const divide = (a, b) => (`${b}` === '0' ? 'INFINITY' : a.div(b).valueOf());

const multiply = (a, b) => a.times(b).valueOf();

const Operate = (numberOne, numberTwo, operation) => {
  const numOne = Big(numberOne);
  const numTwo = Big(numberTwo);
  let total;
  switch (operation) {
    case '+':
      total = plus(numOne, numTwo);
      break;
    case '-':
      total = subtract(numOne, numTwo);
      break;
    case 'x':
      total = multiply(numOne, numTwo);
      break;
    case '÷':
      total = divide(numOne, numTwo);
      break;
    case '%':
      total = numOne.mod(numTwo);
      break;
    default:
      total = NaN;
  }

  return total.toString();
};
export default Operate;
