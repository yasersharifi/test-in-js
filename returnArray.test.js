const returnArray = require('./returnArray');

test('should return array', () => { 
    const myArray = returnArray();

    const isArray = Array.isArray(myArray);

    expect(isArray).toBe(true);
});