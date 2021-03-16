function converToInt(str){
    return parseInt(str, 16);
}
console.log(converToInt("BA"));
console.log(converToInt("BA"));
console.log(converToInt("F1"));
console.log(converToInt("JeffBezos"));
module.exports = converToInt;