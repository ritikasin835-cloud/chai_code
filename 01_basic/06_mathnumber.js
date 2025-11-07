const score = 400
 console.log(score);//400
console.log(typeof score)//number
const balance = new Number(100)
console.log(balance);
//[Number: 100]
console.log(balance.toString());//100
console.log(typeof balance)//object
//explicitily define that we need only number.basically we made a object

console.log(balance.toString().length);//3
 console.log(balance.toFixed(3));//100.000

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(4));
//123.9
//| Code                        | Output     | Explanation                     |
// | --------------------------- | ---------- | ------------------------------- |
// | `(9.8765).toPrecision(2)`   | `'9.9'`    | 2 significant digits            |
// | `(1234.56).toPrecision(2)`  | `'1.2e+3'` | Scientific notation (1.2 × 10³) |
// | `(0.004567).toPrecision(2)` | `'0.0046'` | Rounded to 2 significant digits |


//const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++ Maths +++++++++++++++++++++++++++++

 console.log(Math); console.log(Math.abs(-4));
 console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
 console.log(Math.min(4, 3, 6, 8));
 console.log(Math.max(4, 3, 6, 8));

 console.log(Math.random());//always value btw 0-1.
 console.log((Math.random()*10) + 1);
 console.log(Math.floor(Math.random()*10) + 1);

 const min = 10
 const max = 20

 console.log(Math.floor(Math.random() * (max - min + 1)) + min)