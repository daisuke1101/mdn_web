// 個々の単語を変更
let words = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present'];
const modifiedWords = words.filter((word, index, arr) => {
    arr[index + 1] += ' extra';
    return word.length < 6;
})
console.log(modifiedWords);  // ["spray"]

// 単語を追加
words = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present'];
const appendedWords = words.filter((word, index, arr) => {
    arr.push('new');
    return word.length < 6;
})
console.log(appendedWords);  // (3) ["spray", "limit", "elite"]

// 単語を削除
words = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present'];
const deleteWords = words.filter((word, index, arr) => {
    arr.pop();
    return word.length < 6;
})
console.log(deleteWords);  // (2) ["spray", "limit"]