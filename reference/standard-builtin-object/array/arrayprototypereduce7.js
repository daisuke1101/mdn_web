var members = [{
    name: 'Amy',
    books: ['Bible', 'Harry Potter'],
    age: 21
}, {
    name: 'Bob',
    books: ['STAR WARS', 'War and Peace'],
    age: 26
}, {
    name: 'Alice',
    books: ['The Lord of the Rings', 'The Shining'],
    age: 18
}];

var allbooks = members.reduce(function(accumulator, currentValue) {
    return [...accumulator, ...currentValue.books];
}, ['Alphabet']);

console.log(allbooks);  // (7) ["Alphabet", "Bible", "Harry Potter", "STAR WARS", "War and Peace", "The Lord of the Rings", "The Shining"]
