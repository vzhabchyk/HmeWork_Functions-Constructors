function Car(carType, carColor, carTransmission, carOwner) {
  this.type = carType;
  this.color = carColor;
  this.transmission = carTransmission;
  this.owner = carOwner;

  this.showInfo = function () {
    console.log('Car type: ' + carType);
    console.log('Car color: ' + carColor);
    console.log('Transmission: ' + carTransmission);
    console.log('Car owner: ' + carOwner);
  }

}
