function Person(name, age) {
  this.name = name;
  this.age = age;

  this.showUserInfo = function () {
    console.log('User name: ' + this.name);
    console.log('User age: ' + this.age);
  }
}

