function numberDoubler(num) {
    while(num < 100){
        num *= 2
    }
    return num;
}
        console.log(numberDoubler(40))

function stringRepeater(str) {
    let newStr="";

    while(newStr.length < 10){
        newStr += str
    }
    return newStr;
}

    console.log(stringRepeater("Keith Eatherly"))

function makeDivisible(x, y) {

   while(x % y !== 0){
        x++
   }
   return x;
}

    console.log(makeDivisible(9, 1))

module.exports = {
    numberDoubler,
    stringRepeater,
    makeDivisible
};