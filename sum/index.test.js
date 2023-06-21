const sum = require('./index');

describe('Sum', () => {
    it('should 5 + 7 to equal 12', () => {
        expect(sum(5, 7)).toBe(12);
    });

    it('should 2 + 3 to equal 5', () => {
        expect(sum(2, 3)).toBe(5);
    });

    it('should 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
    });
});
