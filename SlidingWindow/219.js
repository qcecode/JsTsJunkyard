// 219. Contains Duplicate II

// Old and needlessly complex :)
class LinkedSet {
    constructor() {
        this.set = new Set();
    }

    add(value) {
        this.set.add(value);
    }
    
    deleteFirst() {
        if (this.set.size === 0) {
            return;
        }
        let firstElement = this.set.values().next().value;
        this.set.delete(firstElement);
    }

    has(value) {
        return this.set.has(value);
    }

    length() {
        return this.set.size;
    }
}

var containsNearbyDuplicate2 = function(nums, k) {
    let linkedSet = new LinkedSet();
    for(let i = 0; i < nums.length; i++){
        const num = nums[i];
        if(linkedSet.has(num)){
            return true;
        }
        linkedSet.add(num);
        if(linkedSet.length() > k){
            linkedSet.deleteFirst();
        }
    }
    return false;
};

// new Try
var containsNearbyDuplicate = function(nums, k) {
    let set = new Set();
    for(let i = 0; i < nums.length; i++){
        if(set.has(nums[i])){
            return true;
        }
        set.add(nums[i]);
        if(set.size > k){
            set.delete(nums[i - k]); // LOL => better 
        }
    }
    return false;
};


let testNums = [1,2,3,1,2,3]
let testK = 2
console.log(containsNearbyDuplicate(testNums,testK));
