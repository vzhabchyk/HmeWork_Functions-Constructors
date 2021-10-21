function Car(carType, carColor, carTransmission, person) {
  this.type = carType;
  this.color = carColor;
  this.transmission = carTransmission;
  this.owner = person;

  this.showInfo = function () {
    console.log('Car type: ' + carType);
    console.log('Car color: ' + carColor);
    console.log('Transmission: ' + carTransmission);
    console.log('Car owner: ' + this.owner.name);
  }

}
