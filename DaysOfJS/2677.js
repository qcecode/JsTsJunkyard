// 2677. Chunk Array

// first try :)
var chunk1 = function(arr, size) {
    if(arr.length === 0){
        return arr;
    }
    let length = arr.length;
    const returnArr = [];
    for(let i = 0; i < length; i = i + size ){
        const inter =[];
        for(let j = i; j < i + size && j < length; j++){
            console.log("i: " + i + "; j: " + j)
            inter.push(arr.shift());
        }
        returnArr.push(inter);
    }
    return returnArr;
};

// second better try

var chunk = function(arr, size) {
    const chunkedArray = [];
    let index = 0;
    while(index < arr.length){
        chunkedArray.push(arr.slice(index,index + size));
        index += size;
    }
    return chunkedArray;

};

console.log(chunk([42,10,19,6,8,0,9,325,0,428,23,757], 3));