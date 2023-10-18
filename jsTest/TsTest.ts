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

// printName({ first: "Bob" });
//
// function printName(obj: { first: string; last?: string }) {
//     // Error - might crash if 'obj.last' wasn't provided!
//     // console.log(obj.last.toUpperCase());    
//
//     if (obj.last !== undefined) {
//         // OK
//         console.log(obj.last.toUpperCase());
//     }
//
//     // A safe alternative using modern JavaScript syntax:
//     console.log(obj.last?.toUpperCase());
// }

// function printId(id: number | string) {
//     console.log("Your ID is: " + id);
// }
// // OK
// printId(101);
// // OK
// printId("202");
// // Error
// printId({ myID: 22342 });

// function printAll(strs: string | string[] | null) {
//     if (strs && typeof strs === "object") {
//         for (const s of strs) {
//             console.log(s);
//         }
//     } else if (typeof strs === "string") {
//         console.log(strs);
//     }
// }

// function logValue(x: Date | string) {
//     if (x instanceof Date) {
//         console.log(x.toUTCString());
//     } else {
//         console.log(x.toUpperCase());
//
//     }
// }
//
// logValue(new Date("2003-07-13"));
// logValue("losloslos");

// function example() {
//     let x: string | number | boolean;
//
//     x = Math.random() < 0.5;
//
//     console.log(x);
//
//     if (Math.random() < 0.5) {
//         x = "hello";
//         console.log(x);
//        
//     } else {
//         x = 100;
//         console.log(x);
//        
//     }
//
//     return x;
//    
// }

// interface Circle {
//     kind: "circle";
//     radius: number;
// }
//
// interface Square {
//     kind: "square";
//     sideLength: number;
// }
//
// type Shape = Circle | Square ;

// function getArea(shape: Shape) {
//     switch (shape.kind) {
//         case "circle":
//             return Math.PI * shape.radius ** 2;
//         case "square":
//             return shape.sideLength ** 2;
//         default:
//             const _exhaustiveCheck: never = shape;
//
//             return _exhaustiveCheck;
//     }
// }

// type DescribableFunction = {
//     description: string;
//     (someArg: number): boolean;
// };
// function doSomething(fn: DescribableFunction) {
//     console.log(fn.description + " returned " + fn(6));
// }
//
// function myFunc(someArg: number) {
//     return someArg > 3;
// }
// myFunc.description = "default description";
//
// doSomething(myFunc);

// function f(n?: number) {
//     if(typeof n === "number"){
//         console.log(n.toFixed(3)); // 1 argument
//     }
// }
//
// f();
// f(10);
// f(undefined);

// function makeDate(timestamp: number): Date;
// function makeDate(m: number, d: number, y: number): Date;
// function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
//     if (d !== undefined && y !== undefined) {
//         return new Date(y, mOrTimestamp, d);
//     } else {
//         return new Date(mOrTimestamp);
//     }
// }
// const d1 = makeDate(12345678);
// const d2 = makeDate(5, 5, 5);

// console.log("d1: " + d1 + "; d2: " + d2);
//const d3 = makeDate(1, 3);

function fn(x: string): string;
function fn(x: number): boolean;
function fn(x: string | number): boolean | string {
    if(typeof x === "number"){
        return true;
    }
    else{
        return "oops";
    }
}

console.log(fn(10));
console.log(fn("lol"));