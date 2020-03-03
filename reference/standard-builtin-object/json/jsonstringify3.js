function replacer(key, value) {
    if(typeof value === 'string') {  // プロパティ値が文字列の場合、undefinedを返す→除外する
        return undefined;
    }
    return value;
}

var foo = {foundation: 'Mozilla', model: 'box', week: 45, transport: 'Jeep', month: 7};
console.log(JSON.stringify(foo,replacer));  // {"week":45,"month":7}(プロパティ値が文字列の分は除外されました)