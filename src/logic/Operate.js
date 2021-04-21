import Big from 'big.js';

const Operate = (numberOne, numberTwo, operation) => {
    let total;
    switch (operation) {
        case '+':
            total = Big(numberOne + numberTwo)
            break;
        case '-':
            total = Big(numberOne - numberTwo)
            break;
        case 'x':
            total = Big(numberOne * numberTwo)
            break;
        case '÷':
            total = Big(numberOne / numberTwo)
            break;
        default:
            total = NaN
    }

    return total.toString();

}
export default Operate;
