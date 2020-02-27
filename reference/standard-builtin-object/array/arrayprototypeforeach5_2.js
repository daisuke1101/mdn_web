// 不自然な例
function Counter() {
    this.sum = 0;
    this.count = 0;
}

Counter.prototype.add = ((array) => {
    array.forEach((entry) => {
        this.sum += entry;
        ++this.count;
        console.log(this.sum);
        console.log(this.count);
    });
})

const obj = new Counter();
obj.add([2, 5, 9]);
console.log(obj.count);  // 0
console.log(obj.sum);  // 0