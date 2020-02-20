const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'February');

console.log(months);  // (5) ["Jan", "February", "March", "April", "June"]

months.splice(4, 1, 'May');

console.log(months);  // (5) ["Jan", "February", "March", "April", "May"]