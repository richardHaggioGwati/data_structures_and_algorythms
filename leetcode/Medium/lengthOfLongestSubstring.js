
/**
 * @param {string} string
 * @return {number}
 * Map Approach
 */
const lengthOfLongestSubstringUsingMap = function(string) {
    const map = new Map()
    let maxLength = 0
    let start = 0
    
    for (let index = 0; index < string.length; index++) {
        const char = string[index]
        
        if (map.has(char) && map.get(char) >= start) {
            start = map.get(char) + 1
        }
        
        map.set(char, index)
        
        maxLength = Math.max(maxLength, index - start + 1)
    }
     return maxLength
};

/**
 * @param {string} string
 * @return {number}
 * Sliding window
 */
const lengthOfLongestSubstring = function (string) {
    const charSet = new Set()
    let left = 0
    let result = 0

    for (let right = 0; right < string.length; right++) {
        while (charSet.has(string[right])) {
            charSet.delete(string[left])
            left += 1 
        }
        charSet.add(string[right])
        result = Math.max(result, right - left + 1) 
    }
    return result
}

console.log(lengthOfLongestSubstring("abcabcbb"))
console.log(lengthOfLongestSubstring("bbbbb"))
console.log(lengthOfLongestSubstring("pwwkew"))