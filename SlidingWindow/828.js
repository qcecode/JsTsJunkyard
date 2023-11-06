// 828. Count Unique Characters of All Substrings of a Given String

function uniqueLetterString(s) {
    let lastSeen = new Array(26).fill(-1);
    let secLastSeen = new Array(26).fill(-1);

    let count = 0
    let res = 0;

    for (let i = 0; i < s.length; i++) {
        let idx = s.charCodeAt(i) - 'A'.charCodeAt(0);
        let p = lastSeen[idx];
        let q = secLastSeen[idx];

        count += i - p - p + q;
        res += count;

        secLastSeen[idx] = lastSeen[idx];
        lastSeen[idx] = i;
    }

    return res;
}
