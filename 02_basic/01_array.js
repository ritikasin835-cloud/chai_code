// array-->object
//js array are resizable
//js array copy operation create shallow copies (All standard built in copy operations with any js object create shallow copy rather than deep copies)
//shallow copy(pass by reference)
//pass by value(deep copy)
//All standard JS copy methods — like:

// Spread syntax ([...], {...obj})

// Array.slice()

// Array.from()

// Object.assign()

// structuredClone() -->object(exception — this one does deep copy!)

// → by default, create shallow copies.
//not need to be of same data type this is not necessary that all the element shoud be of same data type
//not assosiative-->example
let arr = [];
arr[0] = "apple";
arr[1] = "banana";
arr["fruit"] = "mango";

console.log(arr[0]);        // "apple"
console.log(arr["fruit"]);  // "mango"
console.log(arr.length);    // 2 ❗ not 
//JavaScript arrays are not associative —
// they only use number indexes, not string keys.

// If you want to use named keys (like "name", "age"),
// you should use an object instead of an array.
//example
//let fruits = ["apple", "banana", "mango"];
//console.log(fruits[1]); // "banana"




const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

 myArr.unshift(6)//Adds one or more elements to the beginning of an array,
//and returns the new length of the array.
 myArr.shift()

 console.log(myArr.includes(9));
  console.log(myArr.indexOf(3));

 const newArr = myArr.join()//It joins (combines) all elements of an array into a single string, with an optional separator between them.
 console.log(myArr);
 console.log(typeof newArr);//string
 console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
//diff btww slice and splice-->
let arr = [10, 20, 30, 40, 50];
let newArr1 = arr.slice(1, 4);

console.log(newArr1); // [20, 30, 40]
console.log(arr);    // [10, 20, 30, 40, 50] (unchanged)

let arr = [10, 20, 30, 40, 50];
let removed = arr.splice(1, 2);

console.log(removed); // [20, 30]
console.log(arr);     // [10, 40, 50]  ✅ changed!




console.log("C ", myArr);
console.log(myn2);