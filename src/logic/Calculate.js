import Operate from './Operate';

const Calculate = ({ total, next, operation }, buttonName) => {

  if (buttonName === 'AC') {
    total = '';
    next = '';
    operation = null;
  } else if (buttonName === '÷' || buttonName === '-' || buttonName === '+' || buttonName === 'x') {
    operation = !next ? buttonName : null;
  } else if (buttonName === '%') {
    if (next) {
      next = (next / 100).toString();
    } else {
      total = (total / 100).toString();
    }
  } else if (buttonName === '+/-') {
    if (next) {
      next = (next * -1).toString();
    } else if (total) {
      total = (total * -1).toString();
    }
  } else if (buttonName === '=') {
    if (total && next && operation) {
      total = Operate(total, next, operation);
      next = '';
      operation = null;
    }
  } else if (!operation) {
    total += buttonName;
  } else {
    next += buttonName;
  }

  return { total, next, operation };
};

export default Calculate;
