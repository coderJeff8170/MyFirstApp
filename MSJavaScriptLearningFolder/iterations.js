/*iterations - LOOPS! let's get loopy

for (i=0; i<10; i++) {
    console.log(i);
}

so here, the 'for' kinda means 'for as long as' certain conditions are met - i.e. the i<10, 
the i will increment by one (i++) and console will log the result, and loop back to the beginning.
once i reaches 10, the condition is no longer true and we'll exit the program.
*/
/*
let a = [6, 10, 11, 18, 45, 123, 16, 72];
for (i = 0; i < a.length; i++) {
    console.log(a[i]);
}

// iteration through array. very useful!!

let jeffsArray = [6, 10, 11, 18, 45, 123, 16, 72];
for (let c = 0; c < jeffsArray.length; c++) {
    const element = jeffsArray[c];
    
}

// even better than that, VScode does code snippets as you start typing, and once you select, 
//you can enter the variable, then the name of the array, as in the above, adding your array to the code. Snazzy!
*/

let x = 1;
while (x < 10) {
    console.log(x++);
    if (x == 7) {
        break;
    }
}

//we can use our old trusty break command from the switch to end a function where we want.
