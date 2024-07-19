const range = str => str.replace(/[0-4]/g, x => 'aeiou'[x])

console.log(range('01234')) // => aeiou