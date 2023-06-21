const { variable, array, returnNumber} = require('./index');


describe('Numbers', () => {
    it('should number variable', () => {
        const variableType = typeof variable;

        expect(variableType).toBe('number');
    });

    it('should all items of array is number', () => {
        for (let i = 0; i < array.length; i++) {
            const arrayItemType = typeof array[i];
    
            expect(arrayItemType).toBe('number');
        }
    });

    it('should function return number', () => {
        const returnNumberType = typeof returnNumber();

        expect(returnNumberType).toBe('number');
    });
    
});
