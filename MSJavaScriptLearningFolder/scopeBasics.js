let a = 'first';
/*
function scopeTest() {
    console.log(a);
    a = 'changed';

    let b = 'second';
    if (a != '') {
        console.log(a);
        console.log('inside: if ' + b);
        let c = 'third';
    }
}
scopeTest();
*/

/*console.log(b);*/

// as above, the scope of a is available to the whole program. b is available only to the function, where it was born
// a variable will be available to all child functions of the function in which it was created.
// it will throw an undefined to anything above it.
var sum = 0;
for(i=4; i<8; i++) {
    if(i == 6) {
        continue;
    }

    sum += i;
    console.log(sum);
}
console.log(sum);