let myFirstName = "Jeffrey";
let myLastName = "Andrews";
let myFullName = `First Name: ${myFirstName} Last Name: ${myLastName}`;
//^^ this is a STRING TEMPLATE, which is another way of saying this vvv;
// remember that string templates use the backtick, instead of the single or doublequotes.
// backticks can be used for strings too.

let fullName = myFirstName + " " + myLastName;

//^^ this is on it's way to being deprecated..

console.log(myFullName);
console.log(fullName);


// a symbol function assigns a unique GUID value to the constant:
const RED = Symbol();
const ORANGE = Symbol();

// log to console value of red, to string which will yield "isSymbol()"
//console.log('Value of RED is' + RED.valueOf());
//^^ this wont work without stringifying it, and even then....
// log to console value of red, to string which will yield "isSymbol()"
console.log('Value of RED is' + RED.valueOf().toString());
//stricklty compares the value and type of red to orange, in this case yielding false
console.log(RED === ORANGE);



