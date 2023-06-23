const returnRandomNumber = require('./returnRandomNumber');

describe('returnRandomNumber', () => {
    test('should return random number between 0 and 99', () => { 
        for (let i = 0; i < 100; i++) {
            const randomNumber = returnRandomNumber();
            expect(randomNumber).toBeGreaterThanOrEqual(0);
            expect(randomNumber).toBeLessThan(100);
        }
    })
});
