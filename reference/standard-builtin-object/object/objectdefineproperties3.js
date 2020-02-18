function defineProperties(obj, properties) {
  function convertToDescriptor(desc) {
    function hasProperty(obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    }

    function isCallable(v) {
      // 注意: 関数以外の値が呼び出し可能である場合、必要に応じて変更
      return typef v === 'function';
    }

    if(typeof desc !== 'object' || desc === null)
      throw new TypeError('bad desc');

    var d = {};

    if(hasProperty(desc, 'enumerable'))
      d.enumerable = !!desc.enumerable;
    if(hasProperty(desc, 'configurable'))
      d.configurable = !!desc.configurable;
    if(hasProperty(desc, 'value'))
      d.value = desc.value;
    if(hasProperty(desc, 'writable'))
      d.writable = !!desc.writable;
    if(hasProperty(desc, 'get')) {
      var g = desc.get;

      if(!isCallable(g) && typeof g !== 'undefined')
        throw new TypeError('bad get');
      d.get = g;
    }
    if(hasProperty(desc, 'set')) {
      var s = desc.set;
      if(!isCallable(s) && typeof s !== 'undefined')
        throw new TypeError('bad set');
      d.set = s;
    }

    if(('get' in d || 'set' in d) && ('value' in d || 'writable' in d))  // データ記述子とアクセサ記述子が混在
      throw new TypeError('identity-confused descriptor');

    return d;
  }

  if(typeof obj !== 'object' || obj === null)
    throw new TypeError('bad obj');

  properties = Object(properties);

  var keys = Object.keys(properties);
  var descs = [];

  for (var i = 0; i < keys.length; i++)
    descs.push([keys[i], convertToDescriptor(properties[keys[i]])]);

  for (var i = 0; i < descs.length; i++)
    Object.defineProperty(obj, descs[i][0], descs[i][1]);

  return obj;
}
