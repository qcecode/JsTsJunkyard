"use strict";
// // This is an industrial-grade general-purpose greeter function:
// function greet(person : string, date : Date) {
//     console.log(`Hello ${person}, today is ${date.toDateString()}!`);
// }
// let personName: string = "Malte"
// greet(personName,new Date());
//
// const names = ["Alice", "Bob", "Eve"];
//
// // Contextual typing for function - parameter s inferred to have type string
// names.forEach(function (s) {
//     console.log(s.toUpperCase());
// });
//
// // Contextual typing also applies to arrow functions
// names.forEach((s) => {
//     console.log(s.toUpperCase());
// });
function fn(x) {
    if (typeof x === "number") {
        return true;
    }
    else {
        return "oops";
    }
}
console.log(fn(10));
console.log(fn("lol"));
