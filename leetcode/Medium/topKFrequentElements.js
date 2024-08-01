/**
 347. Top K Frequent Elements
Solved
Medium
Topics
Companies
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]
 

Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104
k is in the range [1, the number of unique elements in the array].
It is guaranteed that the answer is unique.
 */



/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = function (nums, k) {
    const map = new Map()
    const results = []
    
    for (let value of nums) {
        if (map.has(value)) {
            map.set(value, map.get(value) + 1)
        } else {
            map.set(value, 1)
        }
    }
    const frequencyArray = Array.from(map).sort((a, b) => b[1] - a[1] )

    for (let index = 0; index < k; index++) {
        results.push(frequencyArray[index][0])  
    }
    return results
};


console.log(topKFrequent([4,1,-1,2,-1,2,3], 2));