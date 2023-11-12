// 643. Maximum Average Subarray I

// first try :)
var findMaxAverage2 = function(nums, k) {
    // setup
    let sum = 0;
    for(let i = 0; i < k; i++) {
        sum += nums[i];
    }
    let maxAvg = sum / k;
    
    for (let i = k; i < nums.length; i++) {
        sum += nums[i];
        sum -= nums[i-k];
        let avg = sum / k;
        if(avg > maxAvg){
            maxAvg = avg;
        }
    }
    
    return maxAvg
};

var findMaxAverage = function(nums, k) {
    let sum = 0;
    for (let i = 0; i < k; i++) {
        sum += nums[i];
    }

    let maxAvg = sum / k;

    for (let i = k; i < nums.length; i++) {
        sum += nums[i] - nums[i - k];
        maxAvg = Math.max(maxAvg, sum / k);
    }

    return maxAvg;
};

let testNums =  [1,12,-5,-6,50,3]
let testK = 4
console.log(findMaxAverage(testNums, testK));