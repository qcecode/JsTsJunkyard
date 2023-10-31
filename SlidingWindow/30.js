// 30. Substring with Concatenation of All Words

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    // sliding window with size words.length() * words[0].length
    let left = 0;
    let windowSize = words.length * words[0].length;
    let wordLength = words[0].length; 
    let map = new Map();
    
    let ans = [];
    
    var helper = (tempStr) =>{
        
        let checkMap = new Map();
        for (const word of words) {
            if(checkMap.has(word)){
                let num = parseInt(checkMap.get(word));
                checkMap.set(word, num + 1);
            }
            else {
                checkMap.set(word, 1);
            }
        }
        
        for (let i = 0; i < tempStr.length; i+= wordLength) {
            let word = tempStr.substring(i, i + wordLength);
            if (checkMap.has(word)) {
                let num = parseInt(checkMap.get(word));
                if( num <= 0 ){
                    return false;
                }
                checkMap.set(word, num - 1);
            }
            else{
                return false;
            }
        }
        return true;
    }
    
    while ( left + windowSize <= s.length ){
        
        if(helper(s.substring(left, left + windowSize))) {
            ans.push(left);
        }
        left++;
    }
    
    return ans;
};



const testS = "wordgoodgoodgoodbestword";
const testWords = ["word","good","best","good"];

console.log(findSubstring(testS, testWords));