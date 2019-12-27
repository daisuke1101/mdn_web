const person = {
  isHuman: false,
  printIntroduction: function() {
    console.log(`My name is ${this.name}. AM I HUMAN? ${this.isHuman}`);
  }
};

const me = Object.create(person);

me.name = "Matthew";
me.isHuman = true;

me.printIntroduction();

