// => (.)\1 gives one or if exist -> two eles of same group
// a or aa

const brf = str => {
    let fivePattern = /(.)\1{4}/;
    let fourPattern = /(.)\1{3}/;
    let fullPattern = /(.)\1{2}(.)\2|(.)\3(.)\4{2}/;
    let threePattern = /(.)\1{2}/;
    let twoPattern = /(.)\1.\1|(.)\2(.)\3/;
    if(fivePattern.test(str)) {
        console.log(str + ' gives five pattern');
        return;
    }
    if(fourPattern.test(str)) {
        console.log(str + ' gives four pattern');
        return;
    }
    if(fullPattern.test(str)) {
        console.log(str + ' gives full pattern');
        return;
    }
    if(threePattern.test(str)) {
        console.log(str + ' gives three pattern');
        return;
    }
    if(twoPattern.test(str)) {
        console.log(str + ' gives two pattern');
        return;
    }
    console.log(str + ' no pattern')
}


brf('!!!!!')
brf('!!!!?')
brf('!!!?!')
brf('?!!!!')
brf('!!!??')
brf('!!???')
brf('!???!')
brf('!!?!!')
brf('??!!?')
brf('!??!!')
brf('!?!!!')