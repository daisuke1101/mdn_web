// JSON作成
var session = {'screens': [], 'state': true};

session.screens.push({'name': 'screenA', 'width': 450, 'height': 250});
session.screens.push({'name': 'screenB', 'width': 650, 'height': 350});
session.screens.push({'name': 'screenC', 'width': 750, 'height': 120});
session.screens.push({'name': 'screenD', 'width': 250, 'height': 60});
session.screens.push({'name': 'screenE', 'width': 390, 'height': 120});
session.screens.push({'name': 'screenF', 'width': 1240, 'height': 650});

// JSON.stringify()でJSON文字列にエンコード→localStorageに保存
localStorage.setItem('session', JSON.stringify(session));

// localStorage内の文字列をJSONオブジェクトにデコード
var restoredSession = JSON.parse(localStorage.getItem('session'));

console.log(restoredSession);
// {screens: Array(6), state: true}
// screens: Array(6)
// 0: {name: "screenA", width: 450, height: 250}
// 1: {name: "screenB", width: 650, height: 350}
// 2: {name: "screenC", width: 750, height: 120}
// 3: {name: "screenD", width: 250, height: 60}
// 4: {name: "screenE", width: 390, height: 120}
// 5: {name: "screenF", width: 1240, height: 650}
// length: 6
// __proto__: Array(0)
// state: true
// __proto__: Object