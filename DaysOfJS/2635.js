var map = function(arr, fn) {
    const tranfromedArr = [];

    arr.forEach((element, index) => {
        tranfromedArr[index] = fn(element, index);
    });
    
    return tranfromedArr
};