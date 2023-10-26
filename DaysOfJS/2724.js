// 2724. Sort By

var sortBy = function(arr, fn) {

    return arr.sort((a,b) => fn(a) - fn(b));
    
};

var fn = (x) => x
var arr = [5,4,1,2,3];

console.log(sortBy(arr,fn));