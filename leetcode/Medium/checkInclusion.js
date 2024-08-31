/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    const s1Length = s1.length;
    const s2Length = s2.length;

    if (s1Length > s2Length) return false;

    const s1Count = new Array(26).fill(0);
    const s2Count = new Array(26).fill(0);

    // Initialize character count for s1 and the first window of s2
    for (let i = 0; i < s1Length; i++) {
        s1Count[s1.charCodeAt(i) - 97]++;
        s2Count[s2.charCodeAt(i) - 97]++;
    }

    // Sliding window over s2
    for (let i = 0; i < s2Length - s1Length; i++) {
        if (matches(s1Count, s2Count)) return true;

        // Move the window: subtract the count of the leftmost character
        s2Count[s2.charCodeAt(i) - 97]--;
        // Add the count of the next character in the window
        s2Count[s2.charCodeAt(i + s1Length) - 97]++;
    }

    // Check the last window
    return matches(s1Count, s2Count);
};

// Helper function to compare two arrays
function matches(s1Count, s2Count) {
    for (let i = 0; i < 26; i++) {
        if (s1Count[i] !== s2Count[i]) return false;
    }
    return true;
}

console.log(checkInclusion("ab", "eidbaooo"))
console.log(checkInclusion("aba", "eidbaooo"))
