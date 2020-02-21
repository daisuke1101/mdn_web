// ArrayではないObjectでincludes()を用いる
(function() {
    console.log([].includes.call(arguments, 'a'));  // true
    console.log([].includes.call(arguments, 'd'));  // false
})('a', 'b', 'c');