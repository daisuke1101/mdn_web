const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(words => words.length > 6);  // ６文字より大きい要素を抽出

console.log(result);  // (3) ["exuberant", "destruction", "present"]