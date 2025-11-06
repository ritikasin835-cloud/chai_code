console.log(2>1);
console.log("3">1);

//always coparison value have same data type

console.log(null>0);
console.log(null>=0);
//the reason is that an equality check == and compariso < > >= <= work differently
//comparisons convert null to a number ,treating it as 0 that's why null>=0 is true and null>0 is false

console.log(undefined==0);
console.log(undefined>=0);
// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);
//Always avoid this type of commparison because we can get confuse
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === //strict check also check value and data type

console.log("2" === 2);