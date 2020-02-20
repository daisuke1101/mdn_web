var obj = {
    length: 0,

    addElem: function addElem (elem) {
        // obj.lengthは、要素が追加されるたびに自動的に増分する
        [].push.call(this, elem);
    }
}

obj.addElem({});
obj.addElem({});
console.log(obj.length);  // 2