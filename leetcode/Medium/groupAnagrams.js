/*
49. Group Anagrams
Solved
Medium
Topics
Companies
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Example 2:

Input: strs = [""]
Output: [[""]]
Example 3:

Input: strs = ["a"]
Output: [["a"]]

*/



/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function (strs) {
    const map = new Map()
	
    for (let i = 0; i < strs.length; i++) {
        const sortedString = strs[i].split('').sort().join('');

        if (!map.has(sortedString)) {
            map.set(sortedString, [strs[i]])
        } else {
            map.get(sortedString).push(strs[i])
        }
    }
    return Array.from(map.values())
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
