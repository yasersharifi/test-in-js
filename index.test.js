const Car = require('./index');

describe('Car', () => {
    let car;

    beforeAll(() => {
        car = new Car('Toyota', 'Camry', 2022);
    });

    it('Should initialize correctly !', () => {
        expect(car.make).toEqual('Toyota');
        expect(car.model).toEqual('Camry');
        expect(car.year).toEqual(2022);
        expect(car.speed).toEqual(0);
    });
    
});
