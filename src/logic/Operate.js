import Big from 'big.js';

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
