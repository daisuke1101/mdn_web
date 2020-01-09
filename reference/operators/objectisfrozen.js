// 新しいオブジェクトは拡張可能であるので、凍結されていません
assert(Object.isFrozen({}) === false);

// 拡張可能ではない空のオブジェクトは、他に何もしなくても凍結されています
var vacuouslyFrozen = Object.preventExtensions({});
assert(Object.isFrozen(vacuouslyFrozen) === true);

// プロパティをひとつ持つ新しいオブジェクトも拡張可能であり、それゆえ凍結されていません
var oneProp = { p: 42 };
assert(Object.isFrozen(oneProp) === false);

// オブジェクトを拡張不可にしても、それは凍結されません
// なぜなら、まだプロパティが設定変更可能 (かつ書き込み可能) であるからです
Object.preventExtensions(oneProp);
assert(Object.isFrozen(oneProp) === false);

// ...しかしプロパティを削除すると、そのオブジェクトは他に何もしなくても凍結されます
delete oneProp.p;
assert(Object.isFrozen(oneProp) === true);

// 書き込み不可であるが設定変更可能なプロパティを持つ、拡張不可のオブジェクトは、凍結されていません
var nonWritable = { e: "plep" };
Object.preventExtensions(nonWritable);
Object.defineProperty(nonWritable, "e", { writable: false }); // 書き込み不可にします
assert(Object.isFrozen(nonWritable) === false);

// プロパティを設定変更不可にすると、オブジェクトは凍結されます
Object.defineProperty(nonWritable, "e", { configurable: false }); // 設定変更不可にします
assert(Object.isFrozen(nonWritable) === true);

// 設定変更不可であるが書き込み可能なプロパティを持つ、拡張不可のオブジェクトは、やはり凍結されていません
var nonConfigurable = { release: "the kraken!" };
Object.preventExtensions(nonConfigurable);
Object.defineProperty(nonConfigurable, "release", { configurable: false });
assert(Object.isFrozen(nonConfigurable) === false);

// プロパティを書き込み不可にすると、オブジェクトは凍結されます
Object.defineProperty(nonConfigurable, "release", { writable: false });
assert(Object.isFrozen(nonConfigurable) === true);

// 設定変更可能なアクセサプロパティを持つ拡張不可のオブジェクトは、凍結されていません
var accessor = { get food() { return "yum"; } };
Object.preventExtensions(accessor);
assert(Object.isFrozen(accessor) === false);

// ...しかしプロパティを設定変更不可にすると、オブジェクトは凍結されます
Object.defineProperty(accessor, "food", { configurable: false });
assert(Object.isFrozen(accessor) === true);

// なお、オブジェクトを凍結するもっとも簡単な方法は、Object.freeze を呼び出すことです
var frozen = { 1: 81 };
assert(Object.isFrozen(frozen) === false);
Object.freeze(frozen);
assert(Object.isFrozen(frozen) === true);

// 定義によると、凍結されたオブジェクトは拡張不可です
assert(Object.isExtensible(frozen) === false);

// また、凍結されたオブジェクトは封印されています
assert(Object.isSealed(frozen) === true);
