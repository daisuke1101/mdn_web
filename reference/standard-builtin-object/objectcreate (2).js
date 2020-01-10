// プロトタイプ[person]を定義
const person = {
  isHuman: false,
  printIntroduction: function() {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  }
}

// [person]をプロトタイプとして、[me]オブジェクトを作成
const me = Object.create(person);

me.name = "Daisuke Morita";  // [person]ではなく、[me]の[name]プロパティに代入
me.isHuman = true;  // 継承されたプロパティは上書き可

me.printIntroduction();

const r2d2 = Object.create(person);

r2d2.name = "R2-D2";
r2d2.inHuman = false;

r2d2.printIntroduction();

