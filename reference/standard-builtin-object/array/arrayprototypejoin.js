const elements = ['Earth', 'Fire', 'Water', 'Air'];

console.log(elements.join());  // Earth,Fire,Water,Air(デフォルトはカンマ','で連結される)

console.log(elements.join(''));  // EarthFireWaterAir(''を引数に指定すると区切り無しで連結される)

console.log(elements.join('-'));  // Earth-Fire-Water-Air

console.log(elements.join('・'))  // Earth・Fire・Water・Air