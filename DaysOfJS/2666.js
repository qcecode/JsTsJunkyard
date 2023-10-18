// 2666. Allow One Function Call

var once = function(fn) {

    let called = false;
    return function(...args){
        if(called === true) return undefined
        called = true; 
        return fn(...args)
    }
};

let fn = (a,b,c) => (a + b + c)
let onceFn = once(fn)

console.log(onceFn(1,2,3)); // 6
console.log(onceFn(2,3,6)); // returns undefined without calling fn

