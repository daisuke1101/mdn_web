function myConcat(separator) {
  var args = Array.prototype.slice.call(arguments, 1);
  return args.join(separator);
}

myConcat(',', 'red', 'orange', 'blue');

myConcat(';', 'elephant', 'giraffe', 'lion', 'cheetah');

myConcat('.', 'sage', 'basil', 'oregano', 'pepper', 'parsley');
