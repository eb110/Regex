const brf = str => {
    let pattern = /(.)\1{4}/;
    let res = pattern.test(str);
    return res;
}


console.log(brf('!!!!!')); // => true
console.log(brf('!!!!?')); // => false