var prices = ['￥7', 500, 8123, 12];
console.log(prices.toLocaleString('ja-JP', {style: 'currency', currency: 'JPY' }));  // ￥7,￥500,￥8,123,￥12