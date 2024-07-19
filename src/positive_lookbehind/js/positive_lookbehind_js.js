// find only 'plb' that have 'x' behind

const test = str => str.replace(/(?<=x)plb/gi, '');


console.log(test('xplbxplbplb')) // => xxplb