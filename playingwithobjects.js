let myFirstName = "Jeffrey";
let myLastName = "Andrews";
let myFullName = `First Name: ${myFirstName} Last Name: ${myLastName}`
//creating an object (JavaScript Object Notation [JSON]):
let obj1 = {};

// add attributes and values to the object
obj1.firstName = 'Jeffrey';

obj1.myFullName = myFullName;

// ccreate an object with attributes and values on one line
let obj2 = { firstName: "Bob", lastName: "Anderson"};

//print object1 to the console
console.log(obj1);

//print object2 to the console
console.log(obj2);

let obj3 = { firstName: "Dirk", lastName: "Diggler"};

//assigning a function to the fullName property of obj3
obj3.fullName = function () {
    return this.firstName + ' ' + this.lastName;
}
//print to console the fullName property of obj3
console.log(obj3.fullName());
//log to console everything inside obj3 - note that this include the function!
console.log(obj3);
//log to console everything inside obj3 that is only data - 
//note the stringify method doesn't output the function.
console.log(JSON.stringify(obj3));

//console.log(obj1.fullName);
//console.log(obj1[fullName]);

let myBirthday = new Date(1970, 7, 1);
console.log(myBirthday.toJSON());