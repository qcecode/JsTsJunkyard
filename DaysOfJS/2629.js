// 2629. Function Composition



// var compose = function(functions) {
//
//     return function(x) {
//         let returnFunc = x;
//         functions.reverse();
//         functions.forEach((ele) => {
//             returnFunc = ele(returnFunc);
//         })
//         return returnFunc;
//     }
// };

var compose = function (functions = []) {
    return function (x) {
        if (!functions.length) { return x }
        for (let index = functions.length - 1; index >= 0; index--) {
            x = functions[index](x)
        }
        return x
    }
};

const fn = compose([x => x + 1, x => x * x, x => 2 * x])
console.log(fn(4)) // 9