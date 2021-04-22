import Operate from './Operate';

const Calculate = ({ total, next, operation }, buttonName) => {
  const answer = {};
  switch (buttonName) {
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
    case '+/-':
      if (next) {
        answer.total = parseFloat(next) * -1;
      }
      break;
    case 'AC':
      answer.total = 0;
      answer.next = '';
      answer.operation = '';
      break;
    case '.':
      if (next) {
        answer.next = next + buttonName;
      } else {
        answer.next = buttonName;
      }
      break;
    case '=':
      if (operation) {
        answer.next = Operate(total, parseFloat(next), operation);
        answer.operation = null;
      } else if (next) {
        answer.next = parseFloat(next);
        answer.operation = null;
      } else {
        answer.next = 0;
        answer.operation = null;
      }
      break;
    default:
      if (operation) {
        answer.total = Operate(total, parseFloat(next), operation);
      } else {
        answer.total = parseFloat(next);
      }
      answer.next = '0';
      answer.operation = buttonName;
  }
};

export default Calculate;
