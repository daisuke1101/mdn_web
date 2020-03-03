var foo = {foundation: 'Mozilla', model: 'box', week: 45, transport: 'Jeep', month: 7};
console.log(JSON.stringify(foo,['week', 'month']));  // {"week":45,"month":7}(week,monthのみ取得されました)