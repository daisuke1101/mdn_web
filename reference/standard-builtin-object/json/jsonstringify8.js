var obj = {
    data: 'data',
    toJSON(key) {
        if (key) {
            return `Now I\'m a NESTED OBJECT under KEY '${key}'`;
        } else {
            return this;
        }
    }
};

console.log(JSON.stringify(obj));  // {"data":"data"}
console.log(JSON.stringify({obj}));  // {"obj":"Now I'm a NESTED OBJECT under KEY 'obj'"}
console.log(JSON.stringify([obj]));  // ["Now I'm a NESTED OBJECT under KEY '0'"]