class Car {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.speed = 0;
    }
  
    accelerate(amount) {
      this.speed += amount;
    }
  
    brake(amount) {
      this.speed -= amount;
    }
  
    getCurrentSpeed() {
      return this.speed;
    }
  
    getMakeAndModel() {
      return `${this.make} ${this.model}`;
    }
  
    getYear() {
      return this.year;
    }
}

module.exports = Car;