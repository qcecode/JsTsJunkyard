//187. Repeated DNA Sequences

var findRepeatedDnaSequences = function(s) {
    const windowSize = 10;
    const map = new Map
    const returnSet = new Set
    
    for(let i = 0; i + windowSize <= s.length; i++){
        let subStr = s.substring(i, i + windowSize);
        if(map.has(subStr)){
            // map.set(subStr, map.get(subStr) + 1) // not needed :)
            returnSet.add(subStr)
        }
        else {
            map.set(subStr, 1)
        }
    }
    return [...returnSet];
};

// even Faster with 2 Sets :) 

var findRepeatedDnaSequences2 = function(s) {
    const windowSize = 10;
    const sequences = new Set();
    const repeated = new Set();

    for (let i = 0; i + windowSize <= s.length; i++) {
        let subStr = s.substring(i, i + windowSize);
        if (sequences.has(subStr)) {
            repeated.add(subStr);
        } else {
            sequences.add(subStr);
        }
    }
    return [...repeated];
};

const testInput = "AAAAAAAAAAA";
console.log(findRepeatedDnaSequences(testInput));