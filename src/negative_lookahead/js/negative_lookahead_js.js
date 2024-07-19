// find only 'plb' that does not have 'x' ahead

const test = str => str.replace(/plb(?!x)/gi, '');


console.log(test('xplbplbxplb')) // => xplbx