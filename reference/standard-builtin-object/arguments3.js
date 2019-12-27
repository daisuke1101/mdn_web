function list(type) {  // 仮引数：'u'もしくは'o'
  var result = '<' + type + 'l><li>';
  var args = Array.prototype.slice.call(arguments,1);
  result += args.join('</li><li>');
  result += '</li></' + type + 'l>';

  return result;
}
