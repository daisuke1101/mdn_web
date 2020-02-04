function Dog(name, breed, color, gender) {
    this.name = name;
    this.breed = breed;
    this.color = color;
    this.gender = gender;
}

theDog = new Dog('Gabby', 'Lab', 'chocolate', 'female');

console.log(theDog.toString());

Dog.prototype.toString = function dogToString() {
    var ret = 'Dog' + this.name + ' is a ' + this.gender + ' ' + this.color + ' ' + this.breed;
    return ret;
}

console.log(theDog.toString());