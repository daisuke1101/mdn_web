function getUint64(dataview, byteOffset, littleEndian) {
    // 64bitを2つの32bitに分割
    const left = dataview.getUint32(byteOffset, littleEndian);
    const right = dataview.getUint32(byteOffset + 4, littleEndian);

    // 2つの32bit値を結合
    const combined = littleEndian? left + 2 ** 32 * right : 2 ** 32 * left + right;

    if (!Number.isSafeInteger(combined)) {
        console.warn(combined, 'exceeds MAX_SAFE_INTEGER. Precision may be lost');
    }
    return combined;
}