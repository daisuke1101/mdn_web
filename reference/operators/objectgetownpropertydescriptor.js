const object1 = {
  property1: 42
}

const descriptor1 = Object.getOwnPropertyDescriptor(object1, 'property1');

console.log(descriptor1.configurable);

console.log(descriptor1.value);
