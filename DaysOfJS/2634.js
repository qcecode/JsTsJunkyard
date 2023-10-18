var filter = function(arr, fn) {
    const transfomedArr = [];
    arr.forEach((element, index) => {
        if(fn(element, index)){
            transfomedArr.push(element);
        }
    });
    return transfomedArr;
};

const func = function plusOne(n) { return n + 1 }
let testArr = [-2,-1,0,1,2]

filter(testArr,func);