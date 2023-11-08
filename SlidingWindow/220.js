// 220. Contains Duplicate III

var containsNearbyAlmostDuplicate = function(nums, k, t) {
    if (k < 1 || t < 0) return false;

    const buckets = {};
    const bucketSize = t + 1;

    const getBucketId = (value) => {
        return Math.floor(value / bucketSize);
    };

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const bucketId = getBucketId(num);
        
        if (buckets.hasOwnProperty(bucketId)) {
            return true;
        }
        
        if (buckets.hasOwnProperty(bucketId - 1) && Math.abs(num - buckets[bucketId - 1]) < bucketSize) {
            return true;
        }
        
        if (buckets.hasOwnProperty(bucketId + 1) && Math.abs(num - buckets[bucketId + 1]) < bucketSize) {
            return true;
        }
        
        buckets[bucketId] = num;
        
        if (i >= k) {
            delete buckets[getBucketId(nums[i - k])];
        }
    }

    return false;
};


let testNums = [1,5,9,1,5,9];
let testIndexDiff = 2;
let testValueDiff = 3;

console.log(containsNearbyAlmostDuplicate(testNums, testIndexDiff, testValueDiff));
