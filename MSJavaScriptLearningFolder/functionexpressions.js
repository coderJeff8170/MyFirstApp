/*
setTimeout(function () {
    console.log('I farted for 5 seconds!')
}, 5000);
*/

//setTimeout is useful to time things, and has two parameters, the first being a function to 
//be timed, the second, how long.

/*
let counter = 0;

function timeout() {
    setTimeout(function() {
        console.log('fart' + counter++);
        timeout();
    }, 2000);
}

timeout();
*/
// ctrl + c to stop this ^^^^
// so here we see setTimeout again, but this time, a counter is appended and ++'ed (increment will print each time)
// timeout is called within itself, so it'll do an infinite loop until ctrl c to cancel

(function () {
    console.log('Immediately Invoked Function Expression');
})();

// ^^^ IIFE - Immediately Invoked Function Expression - so called because you don't have to call it
// it just happens. 

// So a function declaration is the function as written
// and a function expression is the function called.... right?
// nope. Top one is true, but a function expression is with a variable, god I'm so confused!!!