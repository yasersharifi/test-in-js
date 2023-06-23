const minus = require('./index');

describe('Minus', () => {
    it('should 5 - 2 equal to 3', () => {
        expect(minus(5, 2)).toBe(3);
    });

    it('should 1 - 1 equal to 0', () => {
        expect(minus(1, 1)).toBe(0);
    });

    it('should 9 - 10 equal to -1', () => {
        expect(minus(9, 10)).toBe(-1);
    });

    it('should 10 - 2 equal to 8', () => {
        expect(minus(10, 2)).toBe(8);
    });
});
