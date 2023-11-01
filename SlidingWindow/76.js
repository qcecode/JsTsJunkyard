// 76. Minimum Window Substring

var minWindow = function(s, t) {

    // check if string is of length 0 or 1
    if(s.length < t.length ){
        return ""
    }
    
    
    let left = 0;
    let right = 0;
    let maxAns = "";

    const neededChars = {};
    for (let char of t) {
        neededChars[char] = (neededChars[char] || 0) + 1;
    }
    let neededCharsNum = Object.keys(neededChars).length
        
    while (right < s.length){
        const rightChar = s[right];
        if(Object.hasOwn(neededChars, rightChar)) {
            neededChars[rightChar]--;
            if (neededChars[rightChar] === 0) neededCharsNum--;
        }
        
        while (neededCharsNum === 0){
            if (!maxAns || maxAns.length > right - left + 1){
                maxAns = s.slice(left, right + 1);
            }

            const leftChar = s[left];

            if (neededChars[leftChar] === 0) {
                neededCharsNum++;
            }
            if(Object.hasOwn(neededChars, leftChar)){
                neededChars[leftChar]++;
            }
            left++;
        }
        right++
    }
    
    return maxAns;
};

const testS = "ADOBECODEBANC";
const testT = "ABC";

console.log(minWindow(testS, testT));