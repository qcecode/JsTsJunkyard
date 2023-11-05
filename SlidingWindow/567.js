// 567. Permutation in String

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    // "null check" 
    if (s1.length > s2.length) return false;
    
    let left  = 0
    let right = 0
    let reqLength = s1.length
    
    let neededChars = []
    for (let i = 0; i<s1.length; i++) {
        let char = s1.charAt(i);
        neededChars[char] = neededChars[char] + 1 || 1
    }
    
    while (right < s2.length){
        // expand the window 
        const rightChar = s2.charAt(right);
        if(neededChars[rightChar] > 0) {
            reqLength--;
        }
        neededChars[rightChar]--;
        if(reqLength === 0){
            return true
        }
        right++
        
        // shrink the window
        if(right - left >= s1.length) {
            const leftChar = s2.charAt(left)
            if (neededChars[leftChar] >= 0) {
                reqLength++
            }
            neededChars[leftChar]++; // i hate this syntax
            left++
        }        
    }
    return false
};

let s1Test = "adc"
let s2Test = "dcda"

console.log(checkInclusion(s1Test, s2Test))