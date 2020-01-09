var target = myObject;
var enum_and_nonenum = Object.getOwnPropertyNames(target);
var enum_only = Object.keys(target);
var nonenum_only = enum_and_nonenum.filter(function(key) {
  var indexInEnum = enum_only.indexOf(key);
  if (indexInEnum == -1) {
    // このキーが enum_only の中になければ、
    // そのキーは列挙不可能であることを意味するので、
    // true を返してフィルターの中に残します。
    return true;
  } else {
    return false;
  }
});

console.log(nonenum_only);
