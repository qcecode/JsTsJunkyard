// 2722. Join Two Arrays by ID

var join = function (arr1, arr2){

    const result = {};

    // 1. initialization
    arr1.forEach(item => {
        result[item.id] = item;
    });
    // 2. joining
    arr2.forEach(item => {
        if (result[item.id]) {
            Object.keys(item).forEach(key => {
                result[item.id][key] = item[key];
            });
        } else {
            result[item.id] = item;
        }
    });

    return Object.values(result);

}



var testArr1 = [{"id":1,"b":{"b": 94},"v":[4,3],"y":48}]
var testArr2 = [{"id":1,"b":{"c": 84},"v":[1,3]}]
console.log(join(testArr1,testArr2));