const test = str => str.replace(/\.|trex|raptor/gi, '');


console.log(test('.lolo.molo.')) // => lolomolo
console.log(test('.lolotrex.molo.trex')) // => lolomolo
console.log(test('.lolotrex.moloraptor.trex')) // => lolomolo

const lambda = str => str.replace(/^./, x => x.toUpperCase())

const lambda_2 = str => str.replace(/0|1|2|3|4/g, x => 'aeiou'[x])

console.log(lambda('romek')) // => Romek

console.log(lambda_2('01234')) // => aeiou