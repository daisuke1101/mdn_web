function Product(name,price) {
    this.name = name;
    this.price = price;
}

function Food(name,price) {
    Product.call(this, name, price);
    this.category = 'food';
}

function Toy(name, price) {
    Product.call(this, name, price);
    this.category = 'Toy';
}

var cheese = new Food('rice', 5);
var fun = new Toy('minicar', 40);