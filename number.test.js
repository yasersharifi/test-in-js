const returnNumber = require('./number');

test('should return number', () => { 
    const myNumber = returnNumber();
    const myNumberType = typeof myNumber;

    expect(myNumberType).toBe('number');
});