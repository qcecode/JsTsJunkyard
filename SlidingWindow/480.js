// 480. Sliding Window Median

var medianSlidingWindow = function(nums, k) {

    let slidingWindow = [];
    for (let i = 0; i < k  - 1; i++) {
        insertBinary(slidingWindow,nums[i]);
    }
    let resArr = [];
    
    for (let i= k - 1; i< nums.length; i++){
        // neue zahl hinzufügen
        insertBinary(slidingWindow,nums[i]);
        
        // median finden
        if(k % 2 === 1){
            let idx = (k - 1) / 2;
            resArr.push(slidingWindow[idx]);
        }
        else {
            let idx = (k) / 2;
            let med = (slidingWindow[idx] + slidingWindow[idx - 1]) / 2;
            resArr.push(med)
        }
        
        // remove last number
        removeBinary(slidingWindow,nums[i - (k - 1)])
    }
    return resArr;
};

function insertLinear(arr, num){
    let insertAt = arr.length;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= num) {
            insertAt = i;
            break;
        }
    }
    
    arr.splice(insertAt, 0, num);
    return arr;
}

function insertBinary(arr, num) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === num) {
            arr.splice(mid, 0, num);
            return arr;
        } else if (arr[mid] < num) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    arr.splice(left, 0, num);
    return arr;
}

function removeFromSortedArray(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            arr.splice(i, 1);
            break;
        }
    }
    return arr;
}

function removeBinary(array, value) {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (array[mid] === value) {
            array.splice(mid, 1);
            return array;
        } else if (array[mid] < value) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
}

let testNums = [1,4,2,3]
let testK = 4

console.log(medianSlidingWindow(testNums,testK))

