const f = (str) => {
let rg = new RegExp('\\b' + 'test' + '\\b')
return rg.test(str)
}

console.log(f('test'))//true
console.log(f('.test.'))//true
console.log(f('-test.'))//true
console.log(f('atest9'))//false
console.log(f(' test '))//true
console.log(f('9test'))//false
console.log(f('$test*'))//true