let name;
do {
  name = prompt("Enter your name.");
} while (!name);

let age;
do {
  age = +prompt("Enter your age.");
  console.log(age);
} while (isNaN(age) && age < 18);

const person = new Person(name, age);
person.showUserInfo();

const carTypes = ['sedan', 'minivan', 'hatchback'];
const carTransmissions = ['auto', 'mechanics'];

function checkType(types, type) {
  for (let i = 0; i < types.length; i++) {
    if(type === types[i]) {
      return false;
    }
  }
  return true;
}

let carType;
do {
  carType = prompt('Enter machine type (sedan, minivan, hatchback).');
} while (checkType(carTypes, carType));


const carColor = prompt('Enter car color.');

let carTransmission;
do {
  carTransmission = prompt('Enter car transmission (auto, mechanics).')
} while (checkType(carTransmissions, carTransmission))


const car = new Car(carType, carColor, carTransmission, person);
car.showInfo();