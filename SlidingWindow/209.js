// 209. Minimum Size Subarray Sum

var minSubArrayLen = function(target, nums) {

    // sliding window
    let left = 0;
    let right = 0;
    let minLength = 0;
    let sum = 0;
    
    while ( right < nums.length){
        // actually makes it slower :)
        // if(nums[right] >= target){
        //     return 1;
        // }
        
        sum += nums[right];
        
        while (sum >= target){
            sum -= nums[left];
            let length = right - left + 1;
            if(minLength === 0 || length < minLength){
                minLength = length;
            }
            left++;
        }
        right++;
    }
    return minLength
};

const testTarget = 10;
const testNums = [2,3,1,2,4,3];

console.log(minSubArrayLen(testTarget, testNums));