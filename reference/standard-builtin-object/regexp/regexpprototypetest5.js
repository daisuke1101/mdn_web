function countWords (sText) {
    for(var rWord = /\w+/g, nCount = 0; rWord.test(sText); nCount++);
    return nCount;
}

console.log(countWords('What a beautiful day!'));  // 4