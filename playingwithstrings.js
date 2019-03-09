let myFirstName = "Jeffrey";
let myLastName = "Andrews";
let myFullName = "First Name: ${myFirstName} Last Name: ${myLastName}";
//^^ this is a STRING TEMPLATE, which is another way of saying this vvv;

let fullName = myFirstName + " " + myLastName;

//^^ this is on it's way to being deprecated..

console.log(myFullName);
console.log(fullName);