// 3. Longest Substring Without Repeating Characters

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // check if string is of length 0 or 1
    if(s.length === 0 ){
        return 0
    }
    if(s.length === 1){
        return 1;
    }
    
    // sliding window
    let left = 0;
    let right = 0;
    let maxLength = 0;
    let map = new Map();
    
    while ( right < s.length ){
        if(map.has(s.at(right)) && left < map.get(s.at(right)) + 1){
            left = map.get(s.at(right)) + 1;
        }
        map.set(s.at(right), right);
        if(maxLength < right-left + 1){
            maxLength = right-left + 1; // eg 5 - 4 is s string with length 2
        }
        //console.log("right:" + right + " | left:" + left + " | max:" + maxLength + " | char:" + s.at(right) + " | map:" + [...map.keys()]);
        right++;
    }
    
    return maxLength;
};

console.log(lengthOfLongestSubstring("abba"));