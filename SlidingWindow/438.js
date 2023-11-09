// 438. Find All Anagrams in a String

// var findAnagrams = function(s, p) {
//     let pMap = new Map();
//     for (let i = 0; i < p.length; i++) {
//         let char = p.charAt(i);
//         if(pMap.has(char)){
//             pMap.set(char, pMap.get(char) + 1);
//         }
//         else {
//             pMap.set(char, 1);
//         }
//     }
//     let map = new Map();
//     let resultArr = [];
//
//     for (let i = 0; i < s.length; i++) {
//         let char = s.charAt(i);
//         // add new Chars
//         if(map.has(char)){
//             map.set(char, map.get(char) + 1);
//         }
//         else {
//             map.set(char, 1);
//         }
//         // check if is valid anagram
//         if(areMapsEqual(pMap, map)){
//             resultArr.push(i - p.length + 1);
//         }
//         // remove last char from map 
//         if(i + 1 >= p.length){
//             if(map.get(s.charAt(i + 1- p.length)) > 1){
//                 map.set(s.charAt(i + 1 - p.length), map.get(s.charAt(i + 1 - p.length)) - 1);
//             }
//             else {
//                 map.delete(s.charAt(i + 1- p.length));
//             }
//         }
//     }
//     return resultArr;
// };
//
// function areMapsEqual(map1, map2) {
//     if (map1.size !== map2.size) return false;
//    
//     for (const [key, val] of map1) {
//         if (!map2.has(key)) {
//             return false;
//         }
//         if (map2.get(key) !== val) {
//             return false;
//         }
//     }
//     return true;
// }

 // improved Version
var findAnagrams = function(s, p) {
    let pMap = new Map();
    for (let char of p) {
        pMap.set(char, (pMap.get(char) || 0) + 1);
    }

    let resultArr = [];
    let sMap = new Map();
    let windowStart = 0;

    for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
        let endChar = s.charAt(windowEnd);
        sMap.set(endChar, (sMap.get(endChar) || 0) + 1);

        // Sobald die Größe des Fensters die Länge von p erreicht hat
        if (windowEnd - windowStart + 1 === p.length) {
            // Vergleichen Sie die Maps direkt, anstatt eine Funktion aufzurufen
            if (mapsAreEqual(pMap, sMap)) {
                resultArr.push(windowStart);
            }

            // Entfernen Sie das Startzeichen, da das Fenster verschoben wird
            let startChar = s.charAt(windowStart);
            sMap.set(startChar, sMap.get(startChar) - 1);
            if (sMap.get(startChar) === 0) {
                sMap.delete(startChar);
            }
            windowStart++; // Verschieben Sie das Fenster
        }
    }

    return resultArr;
};

function mapsAreEqual(map1, map2) {
    if (map1.size !== map2.size) return false;
    for (const [key, val] of map1) {
        if (map2.get(key) !== val) {
            return false;
        }
    }
    return true;
}


let testS = "cbaebabacd";
let testP = "abc";
console.log(findAnagrams(testS,testP));