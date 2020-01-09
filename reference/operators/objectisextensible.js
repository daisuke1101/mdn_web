// 新規オブジェクトは拡張可
var empty = {};
assert(Object.isExtensible(empty) === true);

// その設定は変更可
Object.preventExtensions(empty);
assert(Object.isExtensible(empty) === false);

// seal メソッドで封印されたオブジェクト
var sealed = Object.seal({});
assert(Object.isExtensible(sealed) === false);

// freeze メソッドで凍結されたオブジェクト
var frozen = Object.freeze({});
assert(Object.isExtensible(frozen) === false);

