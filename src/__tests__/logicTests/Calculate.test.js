import calculate from '../../logic/Calculate';

describe('when checking calculate method', () => {
    const data = {
        total: '',
        next: '',
        operation: null,
    };

    const newData = {
        total: '10',
        next: '5',
        operation: '+',
    };

    it('checks functionallity of AC Button ', () => {
        expect(calculate(data, 'AC')).toEqual(data);
    });

    it('checks functionallity of +/- button', () => {
        expect(calculate(newData, '+/-')).toStrictEqual({
            total: '10',
            next: '-5',
            operation: '+',
        });

        const newValue = calculate(newData, '+/-');
        expect(Math.sign(newValue.next)).not.toBe(5);
    });

    it('check functionallity of % Button', () => {
        const newValue = calculate(newData, '%');
        expect(newValue.next).toEqual('0.05');
    });

    it('checks if number is adding after the existing number befor pressing operation', () => {
        const newValue = calculate(newData, '2');
        expect(newValue.next).toBe('52');
    });

    it('checks . functionallity', () => {
        const newValue = calculate(newData, '.');
        expect(newValue.next).toBe('5.');
    });

    describe('when performing = operator', () => {
        const newValue = calculate(newData, '=');
        it('checks for operation to be null', () => {
            const newValueData = calculate(data, '=');
            expect(newValueData.operation).toEqual(null);
        });

        it('checks operation not be null', () => {
            expect(newValue.operation).not.toBe('null');
        });

        it('checks the results of the calculation', () => {
            expect(newValue.total).toBe('15');
        });
    });
});