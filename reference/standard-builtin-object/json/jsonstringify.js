console.log(JSON.stringify({x:5,y:6}));  // {"x":5,"y":6}
console.log(JSON.stringify([new Number(3), new String('false'), new Boolean(false)]));  // [3,"false",false]
console.log(JSON.stringify({x: [10, undefined, function(){}, Symbol('')] }));  // {"x":[10,null,null,null]}
console.log(JSON.stringify(new Date(2020, 6, 24, 15, 4, 5)));  // "2020-07-24T06:04:05.000Z"