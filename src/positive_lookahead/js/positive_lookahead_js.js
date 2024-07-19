// find only 'plb' that have 'x' after it

const test = str => str.replace(/plb(?=x)/gi, '');


console.log(test('plbxplbxplb')) // => xxplb