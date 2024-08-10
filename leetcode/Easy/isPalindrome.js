/**
 * @param {string} string
 * @return {boolean}
 */
const isPalindrome = function(string) {
    let newString = ''

    for (str of string) {
        if (/^[a-zA-Z0-9]+$/.test(str)) {
            newString += str.toLowerCase()
        }
    }
    return newString === newString.split("").reverse().join("")
};

const isAlphaNumeric = (string) => {
    let code, i = 0, len = string.length;
    for (i = 0; i < len; i++) {
        code = str.charCodeAt(i);
        if (!(code > 47 && code < 58) && // numeric (0-9)
            !(code > 64 && code < 91) && // upper alpha (A-Z)
            !(code > 96 && code < 123)) { // lower alpha (a-z)
          return false;
        }
      }
      return true;
}

const isPalindrome1 = function (string) {
    const array = []

    for (str of string) {
        if (isAlphaNumeric(str)) {
           array.push(str.toLowerCase()) 
        }
    }
    let start = 0;
    let end = array.length - 1;
    while (start <= end) {
        if (array[start] === array[end]) {
            start++
            end--
        } else {
            return false
        }
    }
    return true
};

console.log(isPalindrome1("A man, a plan, a canal: Panama"))
console.log(isPalindrome1("A man, a plan, a canal: anama"))