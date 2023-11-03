// 239. Sliding Window Maximum

// Brute Fore O(Nums.length*k)
// var maxSlidingWindow = function(nums, k) {
//    
//     // sliding window
//     let right = 0;
//     let maxArr = [];
//    
//     while (right + k <= nums.length){
//         let subNums = nums.slice(right, right+k)
//         maxArr.push(Math.max(...subNums));
//         right++;
//     }
//     return maxArr;
// };

// Better O(nums.length)
function maxSlidingWindow(nums, k) {
    if (nums.length === 0 || k === 0) return [];

    let deque = [];
    let maxArr = []; 

    for (let i = 0; i < nums.length; i++) {
        while (deque.length > 0 && deque[0] < i - k + 1) {
            deque.shift();
        }

        while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
            deque.pop();
        }

        deque.push(i);
        
        if (i >= k - 1) {
            maxArr.push(nums[deque[0]]);
        }
    }

    return maxArr;
}

let testNums = [1,3,-1,-3,5,3,6,7];
let testK = 3;
console.log(maxSlidingWindow(testNums, testK).toString());