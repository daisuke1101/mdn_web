const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

const regex = /dog/gi;

console.log(p.replace(regex, 'ferret'));  // The quick brown fox jumps over the lazy ferret. If the ferret reacted, was it really lazy?(第一引数が正規表現の場合、その法則に従う)

console.log(p.replace('dog', 'monkey'));  // The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?(第一引数が文字列の場合、最初に見つかった文字列のみ置換される)