class UberPrice {
    constructor() {
      this.baseFare = 20;
      this.costPerKilometer = 15;
      this.costPerMinute = 3;
      this.travelFee = 50;
    }
  
    calculatePrice(distanceInKilometers, timeInMinutes) {
    const distanceCost = this.costPerKilometer * distanceInKilometers;
    const timeCost = this.costPerMinute * timeInMinutes;

    //total price
    const totalPrice = this.baseFare + distanceCost + timeCost + this.travelFee;
    return totalPrice;
      }
  }
  
  const calculator = new UberPrice();
  const distanceInKilometers = 4.0; //distance in k.m
  const timeInMinutes = 12; // Time in minutes

  const estimatedPriceINR = calculator.calculatePrice(distanceInKilometers, timeInMinutes);
  console.log(`The Uber price is ₹${estimatedPriceINR}`);
  