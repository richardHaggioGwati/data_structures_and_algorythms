/**
 * @param {string} string
 * @return {string}
 */
const longestPalindrome = function (string) {
    if (string.length <= 1 ) return string

    let start = 0
    let maxLength = 1

    const checkPalindrome = (left, right) => {
        while (left >= 0 && right < string.length && string[left] === string[right]) {
            const currentLength = right - left + 1
            if (currentLength > maxLength) {
                start = left
                maxLength = currentLength
            }
            left--
            right++
        }
    }

    for (let index = 0; index < string.length; index++) {
        // Odd length
        checkPalindrome(index, index)
        // Even Length
        checkPalindrome(index, index + 1)
    }

    return string.substring(start, start + maxLength)
};

console.log(longestPalindrome("babad"))
console.log(longestPalindrome("ac"))