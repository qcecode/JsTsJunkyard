// 2626. Array Reduce Transformation

var reduce = function(nums, fn, init) {
    
    if(nums.length === 0) return init;
    let val = init;
    nums.forEach((ele, index) => {
        val = fn(val, nums[index]);
    })
    return val;
};

tnums = [1,2,3,4]
tfn = function sum(accum, curr) { return accum + curr * curr; }
tinit = 100

console.log(reduce(tnums, tfn, tinit));