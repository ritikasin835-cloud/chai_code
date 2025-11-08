// singleton-->when make from constructor then it is singleton (Only one instance of an object exists in memory —
// and it’s shared everywhere it’s used.

// In JavaScript, if you create an object using the Object.create() method (or a similar pattern), you can create a singleton.)
//The object is created once using Object.create()

// It’s shared — you don’t call new multiple times like with a class

// Hence, it’s called a singleton object
// Object.create
//const singletonObj = Object.create({
//   name: "Ritika",
//   age: 20
// });

// console.log(singletonObj.name); // "Ritika"
//The object is created once using Object.create()

// It’s shared — you don’t call new multiple times like with a class

// Hence, it’s called a singleton object

//object in js-->An object in JavaScript is a collection of key–value pairs.
//Each key (called a property) is a string or symbol,
//and each value can be any data type — number, string, array, function, or even another object.

// object literals(An object literal is the simplest and most common way to create an object —
//using curly braces {} directly.)
//exampls->const user = {
// //   
// You directly write { key: value }

// This syntax is called object literal

// It is not created using a class or constructor
//Object literal can also contain methods:
//const a = Symbol("key1");
 const mySym = Symbol("key1")

// const b = Symbol("key1");
//symbol declaration

// console.log(a === b); // false ❌
//Create unique keys for object properties
//(so that they don’t accidentally conflict with other keys)



const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",//use symbol as a object key .and print//
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
//all  keys beahve like string.

// console.log(JsUser.email)//getting access of value of object by usng this object class name.access value
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])
// console.log(typeof JsUser[mySym])//string not symbol
// console.log(typeof JsUser[mySym]);
//console.log(mySym);

//(Object.getOwnPropertySymbols(JsUser));
//(JsUser[symbols[0]]);
JsUser.email = "hitesh@chatgpt.com"//value of email are changing.(value overwrite)

//Object.freeze(JsUser)-->after freezing objet once we cannot change any key or insert any new.


JsUser.email = "hitesh@microsoft.com"
//no changge even after redeclared email
//console.log(JsUser);

JsUser.greeting = function(){
   console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greeting);//function anonymous only function reference come back

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

//when we want to refer any key to symbol not to string then we use [].
//on that key name(variable)