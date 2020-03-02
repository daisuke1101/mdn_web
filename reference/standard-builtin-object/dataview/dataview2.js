var littleEndian = (function() {
    var buffer = new ArrayBuffer(2);
    new DataView(buffer).setInt16(0, 256, true); // リトルエンディアン
    // Int16Arrayはプラットフォームのエンディアンを使用
    return new Int16Array(buffer)[0] === 256;
})();

console.log(littleEndian);  // true(Intel・AMDではリトルエンディアン)
// モトローラではビッグエンディアン