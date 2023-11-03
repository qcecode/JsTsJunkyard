// 424. Longest Repeating Character Replacement

var characterReplacement = function(s, k) {
    let left = 0;
    let right = 0;
    var maxLenght = 0;

    const frequencies = {}
    let highestFrequency = 0

    while (right < s.length) {
        const rightCharacter = s.charAt(right)
        frequencies[rightCharacter] = frequencies[rightCharacter] + 1 || 1
        highestFrequency = Math.max(highestFrequency, frequencies[rightCharacter])

        while ((right - left + 1) - highestFrequency > k) {
            const leftCharacter = s.charAt(left)
            frequencies[leftCharacter] -= 1
            left++
        }

        maxLenght = Math.max(maxLenght, right - left + 1)

        right++
    }
    return maxLenght;
};

characterReplacement("BCBBCCCAB",2)