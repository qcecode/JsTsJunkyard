// 995. Minimum Number of K Consecutive Bit Flips

var minKBitFlips = function(nums, k) {
    let right = 0;
    let flipCnt= 0;
    let left = 0;
    
    while(right < nums.length){
        if(nums[right] === 0){
            // flip
            if(right + k >= nums.length){
                return -1;
            }
            flipCnt++;
            
            for (let i = 0; i < k; i++) {
                if(nums[right+i] === 0){
                    nums[right+i] = 1;
                }
                else{
                    nums[right+i] = 0;
                }
            }
        }
        right++;
    }
    return flipCnt;
};

var minKBitFlips2 = function(nums, k) {
    let flipCount = 0;   // Number of flips made so far
    let totalFlips = 0;  // Total number of flips needed
    let flipIndicator = new Array(nums.length).fill(0); // Array to keep track of flip operations

    for (let i = 0; i < nums.length; ++i) {
        // If we've reached a point where a previous flip ends, decrease the flip count
        if (i >= k && flipIndicator[i - k] === 1) {
            flipCount--;
        }

        // Check if the current bit is 0 and flipCount is even, or if the bit is 1 and flipCount is odd
        if (nums[i] === flipCount % 2) {
            // If we don't have enough space to flip k bits, return -1
            if (i + k > nums.length) {
                return -1;
            }
            // Indicate that we start a new flip operation at index i
            flipIndicator[i] = 1;
            flipCount++;   // Increment the number of flips made so far
            totalFlips++;  // Increment the total number of flips needed
        }
    }
    return totalFlips;
};


let testNums = [0,1,0]
let testK = 1
console.log(minKBitFlips2(testNums,testK))