var myMap = new Map();
myMap.set('bar', 'foo');

if (myMap.delete('bar')) {
    console.log('Successfully removed.');
}

if (myMap.has('bar') === false) {
    console.log('The "bar" element is no longer present.');
}