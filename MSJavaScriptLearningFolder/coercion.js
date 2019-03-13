let a = 7;
let b = '6';
b = parseInt(b, 10);
//the function parseInt (variable, base) will stringify a number.
let c = a + b;
console.log('Answer: ' + c);
//concatenation of a number and a number of a string will result in placing the digits side by side.

let d = parseInt('bob', 10);
let e = isNaN(d);
console.log(d);
console.log(e);
