///"",'' both can used for string 
const namestrig = "hitesh"
const repoCount = 50
//outdated
// console.log(name + repoCount + " Value");
//useful
console.log(`Hello my name is ${namestrig} and my repo count is ${repoCount}`);
//${} it is used for inserting variable(string interpolation)

const gameName = new String('hitesh-hc-com')
//another  metod for writing string.
//You’re creating a String object (non-primitive).

//It’s an instance of the String class.

//So gameName is not a primitive string, it’s an object that wraps a string value.

// console.log(gameName[0]);//h
// console.log(gameName.__proto__);//object


// console.log(gameName.length);//8
// console.log(gameName.toUpperCase());//function toUppercase
console.log(gameName.charAt(2));//t
console.log(gameName.indexOf('t'));//2

const newString = gameName.substring(0, 4)//cannnot give negative values
console.log(newString);
//hite
//const gameName = new String('hitesh-hc-com')
const anotherString = gameName.slice(-6, 4)
//slice(start, end)
//can give negative value too

//h  i  t  e  s  h  -  h  c  -  c  o  m
//0  1  2  3  4  5  6  7  8  9 10 11 12

//-6==>lenth(13)-6==7
//so it is start at 7
//slice(7, 4)
//slice(7, 4)
//slice(7, 4)
//In slice(), if the start index > end index,

//👉 In slice(), if the start index > end index,

//JavaScript returns an empty string "".
console.log(anotherString);
//

const newStringOne = "   hitesh    "
console.log(newStringOne);
//no triming
//   hitesh
console.log(newStringOne.trim());
//hitesh
const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))
//for replacement 
//
https://hitesh.com/hitesh-choudhary
console.log(url.includes('sundar'))
// for searching any string we use this
//false
console.log(gameName.split('-'));
//split all dashed or spaced element individually
[ 'hitesh', 'hc', 'com' ]