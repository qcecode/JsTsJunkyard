// 2695. Array Wrapper

var ArrayWrapper = function(nums) {
    this.nums = nums;
};

/**
 * @return {number}
 */
ArrayWrapper.prototype.valueOf = function() {
    return this.nums.reduce((sum, current) => sum + current, 0);
}

/**
 * @return {string}
 */
ArrayWrapper.prototype.toString = function() {
    if(this.nums.length === 0){
        return "[]";
    }
    else {
        var string = "[";
        for (const num of this.nums) {
            string += num.toString();
            string += ",";
        }
        string = string.slice(0, -1); // remove last char ","
        string += "]";
        return string;
    }
    
    // more elegant solution
    // return `[${this.nums.join(',')}]`;
}


const obj1 = new ArrayWrapper([1,2]);
const obj2 = new ArrayWrapper([3,4]);
console.log(obj1 + obj2); // 10
console.log(String(obj1)); // "[1,2]"
console.log(String(obj2)); // "[3,4]"
