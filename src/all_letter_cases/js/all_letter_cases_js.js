// /i => all letter cases

const test = str => str.replace(/\.|trex|raptor/gi, '');


console.log(test('.lolo.molo.')) // => lolomolo
console.log(test('.lolotrex.molo.trex')) // => lolomolo
console.log(test('.lolotrex.moloraptor.trex')) // => lolomolo