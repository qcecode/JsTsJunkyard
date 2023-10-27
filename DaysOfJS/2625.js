// 2625. Flatten Deeply Nested Array

var flat = function (arr, n) {
    let returnArr = [];

    for (const arrElement of arr) {
        if (Array.isArray(arrElement) && n > 0) {
            returnArr.push(...flat(arrElement, n-1));
        } else {
            returnArr.push(arrElement);
        }
    }
    
    return returnArr;
};

var testArr = [1,2,3,[4,5,6],[7,8,[9,10,11],12],[13,14,15]];
console.log(flat(testArr, 1));