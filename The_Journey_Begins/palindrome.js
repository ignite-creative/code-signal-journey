function solution(inputString) {
  var re = /[\W_]/g;
    var lowRegStr = inputString.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr;
}