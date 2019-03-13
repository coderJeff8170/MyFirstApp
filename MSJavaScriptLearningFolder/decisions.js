/*
let count = 'bob';
if (count == 8) {
    console.log('Count is 8');
} else if (count > 8) {
    console.log('Count is greater than 8');
} else if (count < 8) {
    console.log('Count is less than 8');
} else {
    console.log('Count doesn\'t appear to be a number');
}
*/

// classic else if statement - note that if count is assigned anything other than a number, it must
//be in it's proper format - leaving quotes off of bob will yield an undefined error

/*
let fruit = 'Orange';

switch (fruit.toLowerCase()) {
    case 'banana':
        console.log('yellow');
        console.log('phallic');
        console.log('mushy');
        break;
    case 'apple':
        console.log('red');
        console.log('spherical');
        console.log('crisp');
        break;
    case 'orange':
        console.log('orange');
        console.log('spherical');
        console.log('juicy');
        break;
    default:
        console.log('fruit');
}
*/
// classic switch - notice that this only works because of the 'toLowerCase()' method
// without that the code would just return 'fruit' - to lower case allows us to ..... wait for it
// compare apples to Apples hahahahahahaha

let a = 5, b = '5';
let result = (a === b) ? 'equal' : 'inequal';
console.log(result);

 // using the ternary operator; the above is shorthand for the below.

console.log((a == b) ? 'equal' : 'inequal');

// but notice the difference between == and === (= is assigned, == is equality[value], and === is strict equality, to include data type)
// in the same manner, the symbol ! means NOT, as in != (not equal), and !== (strictly not equal);
// notice that there isn't a "not assigned", meaning that there's an equal less when you're talknig about NOT.
