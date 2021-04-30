import operate from '../../logic/Operate';

describe('Operations', () => {
  it('checks for sum operator', () => {
    expect(operate('5', '1', '+')).toBe('6');
  });

  it('checks for subtraction operator', () => {
    expect(operate('10', '8', '-')).toBe('2');
  });

  it('checks for multiplicaiton operator', () => {
    expect(operate('6', '9', 'x')).toBe('54');
  });

  it('checks for division operator', () => {
    expect(operate('10', '2', '÷')).toBe('5');
  });
});
