const number = 123456.789;

console.log(new Intl.NumberFormat('de-DE', {style: 'currency', currency: 'EUR'}).format(number));

console.log(new Intl.NumberFormat('de-DE', {style: 'currency', currency: 'DEM'}).format(number));

console.log(new Intl.NumberFormat('ja-JP', {style: 'currency', currency: 'JPY'}).format(number));

console.log(new Intl.NumberFormat('en-IN', {maximumSignificantDigits:3}).format(number));


