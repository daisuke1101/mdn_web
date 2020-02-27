if(!Array.prototype.mapUsingReduce) {
    Array.prototype.mapUsingReduce = function(callback, thisArg) {
        return this.reduce(function(mappedArray, currentValue, index, array){
            mappedArray[index] = callback.call(thisArg, currentValue, index, array);
            return mappedArray;
        }, []);
    };
}

console.log([1, 2, , 3].mapUsingReduce(
    (currentValue, index, array) => currentValue + index + array.length
));  // (4) [5, 7, empty, 10]