const BigInt = window.BigInt, bigThirtyTwo = BigInt(32), bigZero = BigInt(0);
function getUint64BigInt(dataview, byteOffset, littleEndian) {
    // 64bitを2つの32bitに分割
    const left = BigInt(dataview.getUint32(byteOffset|0, !!littleEndian) >>> 0);
    const right = BigInt(dataview.getUint32((byteOffset|0) + 4|0, !!littleEndian) >>> 0);

    // 2つの32bit値を結合
    return littleEndian ? (right<<bigThirtyTwo)|left : (left<<bigThirtyTwo)|right;
}