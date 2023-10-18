// const numbers = [34, 2, 15, 78, 56, 12];
// console.log("Ursprüngliche Zahlen:", numbers);
//
// const sortedNumbers = numbers.sort((a, b) => a - b);
// console.log("Sortierte Zahlen:", sortedNumbers);

// obj reference

// const Manager = {
//     name: "Karina",
//     age: 27,
//     job: "Software Engineer",
// };
// const Intern = {
//     name: "Tyrone",
//     age: 21,
//     job: "Software Engineer Intern",
// };
//
// function sayHi() {
//     console.log(`Hello, my name is ${this.name}`);
// }
//
// // add sayHi function to both objects
// Manager.sayHi = sayHi;
// Intern.sayHi = sayHi;
//
// Manager.sayHi(); // Hello, my name is Karina
// Intern.sayHi(); // Hello, my name is Tyrone

// "use strict";
// class Color {
//     constructor(r, g, b) {
//         this.values = [r, g, b];
//     }
//     get red() {
//         return this.values[0];
//     }
//    
//     // set red(value) {
//     //     this.values[0] =value;
//     // }
// }
//
// const red = new Color(255, 0, 0);
// red.red = 0;
// console.log(red.red); // 255


const handler = {
    get(target, name) {
        return name in target ? target[name] : 42;
    },
};

const p = new Proxy({}, handler);
p.a = 1;
console.log(p.a, p.name, p.b); // 1, 42


