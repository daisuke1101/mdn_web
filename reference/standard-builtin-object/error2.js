try {
    throw new Error('テストです');
} catch (e) {
    console.error(e.name + ': ' + e.message);
}  // Error: テストですを表示