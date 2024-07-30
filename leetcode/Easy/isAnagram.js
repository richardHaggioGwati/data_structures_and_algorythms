/**
242. Valid Anagram
Solved
Easy
Topics
Companies
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 */


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function(s, t) {
    if (s.length !== t.length) return false

    const sMap = new Map()
    const tMap = new Map()

    s.split("").forEach((element) => {
        if(!sMap.has(element)) {
            sMap.set(element, 1)
        }
        sMap.set(element, sMap.get(element) + 1)
    })

    t.split("").forEach((element) => {
        if(!tMap.has(element)) {
            tMap.set(element, 1)
        }
        tMap.set(element, tMap.get(element) + 1)
    })

    for (let [key, value] of sMap) {
        if(!tMap.has(key) || tMap.get(key) !== value) {
            return false
        }
    }
    return true
};

console.log(isAnagram("anagram", "nagaram"))
console.log(isAnagram("cat", "rat"))

//TODO: time complexity
