// 395. Longest Substring with At Least K Repeating Characters

// stupid Solution
var longestSubstring = function(s, k) {
    let maxLength = 0;

    let lastChar;
    let charJ
    
    for (let j = 0; j < s.length; j++) {
        let map = new Map;
        charJ = s.charAt(j);
        if(lastChar === charJ){
            continue
        }
        for (let i = j; i < s.length; i++) {
            let char = s.charAt(i);
            if (map.has(char)) {
                map.set(char, map.get(char) + 1)
            } else {
                map.set(char, 1);
            }
            // alle Values Checken
            let arr = [...map.values()]
            if (!arr.some(element => element < k)) {
                maxLength = Math.max(i - j + 1, maxLength);
            }
        }
        lastChar = charJ;
    }
    return maxLength;
};

let testS = "caaaacac";
let testK = 4;

console.log(longestSubstring(testS,testK));