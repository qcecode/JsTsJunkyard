// 2623. Memoize

function memoize(fn) {
    let map = new Map;
    return function(...args) {
        const s = args.toString();
        if(map.has(s)){
            return map.get(s);
        }
        else{
            let res = fn(...args);
            map.set(s, res);
            return res;
        }
    }
}


let callCount = 0;
const memoizedFn = memoize(function (a, b) {
    callCount += 1;
    return a + b;
})
memoizedFn(2, 3) // 5
memoizedFn(2, 3) // 5
console.log(callCount) // 1
