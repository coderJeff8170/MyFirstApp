/* function jeffIsAwesome() {
    console.log('Jeff Is Awesome!');
}

let jeff = jeffIsAwesome;

jeff();
jeff();
jeff();
jeff();
*/

//basic function prints name, assigned to variable, then variable called as a function multiple times.

/*
function callAsshole(name) {
    console.log('*************************');
    console.log('You\'re an asshole, ' + name + ' !');
    console.log('*************************');
}

callAsshole('jeff');
*/
// you can assign a parameter to a function to make it more useful, as in name, here
// just remember that parameter should be a string in this case!!


function calculateTaxNc(amount) {
    let result = amount * 0.075 + amount;
    return result;
}

let currentTax = calculateTaxNc(100);
console.log(currentTax);


//functions are useful for number tasks too. Note the return keyword to retrieve the desired value.
//you can assign the function to a variable, and then log out or whatever the variable.
//function invocation expression!!