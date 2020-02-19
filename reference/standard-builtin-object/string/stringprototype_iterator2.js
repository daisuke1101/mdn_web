var string = 'A\uD835\uDC68B\uD835\uDC69C\uD835\uDC6A';

// for...ofを用いた例
for (var v of string) {
    console.log(v);
}

// A
// 𝑨(\uD835\uDC68)
// B
// 𝑩(\uD835\uDC69)
// C
// 𝑪(\uD835\uDC6A)