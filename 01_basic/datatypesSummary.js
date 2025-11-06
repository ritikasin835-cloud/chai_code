//JavaScript is a dynamically typed language.

//🧩 Meaning:

//In a dynamically typed language,
//👉 You don’t need to declare the data type of a variable.
//👉 The type is decided at runtime, based on the value assigned.

//💡 Example:
// let x = 10;        // x is a number
// x = "Hello";       // now x is a string
// x = true;          // now x is a boolean


//✅ This works fine in JavaScript — no errors!
//Because JS automatically changes (or reassigns) the variable’s type depending on the value stored.
//  Primitive data type==>Primitive data types are basic / built-in data types that are already defined by the programming language.(call by value)

//  7 types : String, Number, Boolearn, null(empty), undefined(value nhi pata but  memory space declared ,variable declare ), Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);//false

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)==>Non-primitive (or derived / user-defined) data types are built using primitive data types.
//They are not directly provided by the language; we create or define them.(call  by reference)

// Array, Objects, Functions
//aray
const heros = ["shaktiman", "naagraj", "doga"];
//object
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);//string
console.log(typeof null);//object
console.log(typeof undefined);//unndefined
console.log(typeof heros)//object
//mainly all non primitive data types type are object
// https://262.ecma-international.org/5.1/