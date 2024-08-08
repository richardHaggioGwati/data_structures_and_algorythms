
/**
 * @param {string} string
 * @return {number}
 */
const lengthOfLongestSubstring = function(string) {
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

console.log(lengthOfLongestSubstring("abcabcbb"))
console.log(lengthOfLongestSubstring("bbbbb"))
console.log(lengthOfLongestSubstring("pwwkew"))