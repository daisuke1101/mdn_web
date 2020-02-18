var end, start;

start = new Date();
for(var i = 0; i < 1000; i++) {
    Math.sqrt(i);
}

end = new Date();

console.log((end.getTime() - start.getTime()) + 'ミリ秒かかりました');