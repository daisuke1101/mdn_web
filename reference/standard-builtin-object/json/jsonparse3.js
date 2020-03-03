console.log(JSON.parse('{"p": 5}', (key, value) =>
typeof value === 'number' ? value * 2 : value
));  // {p: 10}

JSON.parse('{"1": 1, "2": 2, "3": {"4": 4, "5":  {"6": 6}}}', (key, value) => {
    console.log(key);
    return value;
});
// 1
// 2
// 4
// 6
// 5
// 3
// 