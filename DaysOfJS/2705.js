// 2705. Compact Object

var compactObject = function(obj) {
    // Base case
    if(typeof obj !== 'object' || obj === null){
        return obj
    }

    // Case for arrays
    if(Array.isArray(obj)){
        const compactArr = []
        for(let i = 0; i < obj.length; i++){
            let val = compactObject(obj[i]);
            if(val){
                compactArr.push(val)
            }
        }

        return compactArr
    }

    // Case for objects
    const compactObj = {};

    for(let key in obj){
        const val = compactObject(obj[key]);
        if(val){
            compactObj[key] = val
        }
    }

    return compactObj
};

var testObj = [null, 0, false, 1];
console.log(compactObject(testObj));