// find only 'plb' that does not have 'x' behind

const test = str => str.replace(/(?<=x)plb/gi, '');


console.log(test('xplbxplbplb')) // => xxplb