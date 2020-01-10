// 既定でオブジェクトは封印されていません
var empty = {};
assert(Object.isSealed(empty) === false);

// 空のオブジェクトを拡張不可にすると、そのまま封印状態になります
Object.preventExtensions(empty);
assert(Object.isSealed(empty) === true);

// 空でないオブジェクトでは、そのプロパティをすべて設定変更不可にしない限り上記と同じにはなりません
var hasProp = { fee: "fie foe fum" };
Object.preventExtensions(hasProp);
assert(Object.isSealed(hasProp) === false);

// そこですべてのプロパティを設定変更不可にすると、オブジェクトは封印状態になります
Object.defineProperty(hasProp, "fee", { configurable: false });
assert(Object.isSealed(hasProp) === true);

// オブジェクトを封印する最も簡単な方法は、もちろん Object.seal です
var sealed = {};
Object.seal(sealed);
assert(Object.isSealed(sealed) === true);

// 封印されたオブジェクトはその定義により、拡張できません
assert(Object.isExtensible(sealed) === false);

// 封印されたオブジェクトは凍結されているかもしれませんが、必ずしもそうではありません
assert(Object.isFrozen(sealed) === true); // すべてのプロパティが書き込み不能でもあります

var s2 = Object.seal({ p: 3 });
assert(Object.isFrozen(s2) === false); // "p" は依然書き込み可能です

var s3 = Object.seal({ get p() { return 0; } });
assert(Object.isFrozen(s3) === true); // アクセサプロパティでは設定変更が可能かという事柄だけになります
