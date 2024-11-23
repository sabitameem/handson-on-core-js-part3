// global scope
var greeting = "Hello, world!";
let count = 0;
const PI = 3.14159;

function sayHello(){
    // accessing global variables
    console.log(greeting);
    console.log("Count inside function:", count);
    console.log("Value of PI inside function:", PI);


    // modifying a global variable
    count++;
}

sayHello();
sayHello();

console.log("Count outside function:", count);
console.log("Greeting outside function:", greeting);
console.log("PI outside function:", PI);