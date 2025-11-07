// Dates(In JavaScript, Dates are used to work with date and time — like today’s date, current time, year, month, day, hours, minutes, seconds, etc.)
//example-->const now = new Date();
const now = new Date();
console.log(now);
//output-->>2025-11-07T04:36:12.123Z





let myDate = new Date()//date object
 console.log(myDate.toString());//Fri Nov 07 2025 15:10:22 GMT+0000 (Coordinated Universal Time)-->output
console.log(myDate.toDateString());//Fri Nov 07 2025 
 console.log(myDate.toLocaleString());//11/7/2025, 3:10:22 PM
 console.log(typeof myDate);//object
//date is a object
let myCreatedDate = new Date(2023, 0, 23)
//in js month started with 0
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate);//value or output just like now
//[Function: toDateString]
 myCreatedDate = new Date("01-14-2023")
 console.log(myCreatedDate.toLocaleString());//1/14/2023,12:00:00 AM

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());//
//1. Date.now()

// ✅ Returns the current time (right now) in milliseconds since
// January 1, 1970, 00:00:00 UTC (this is called the Unix Epoch time).
//myCreatedDate.getTime()

//✅ Returns the timestamp (in milliseconds) for the specific date stored in myCreatedDate.
 console.log(Math.floor(Date.now()/1000));

 let newDate = new Date()
 //random date generator where month start from 0
console.log(newDate);
 console.log(newDate.getMonth() + 1);
 console.log(newDate.getDay());

// // `${newDate.getDay()} and the time `

console.log(newDate.toLocaleString('default', {
 weekday: "long",
    
}))