/**
 238. Product of Array Except Self
Solved
Medium
Topics
Companies
Hint
Given an integer array number, return an array answer such that answer[i] is equal to the product of all the elements of number except number[i].

The product of any prefix or suffix of number is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

 

Example 1:

Input: number = [1,2,3,4]
Output: [24,12,8,6]
Example 2:

Input: number = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
 

Constraints:

2 <= number.length <= 105
-30 <= number[i] <= 30
The product of any prefix or suffix of number is guaranteed to fit in a 32-bit integer.
 */

/**
 * Division would have been easier
 * @param {number[]} number
 * @return {number[]}
 */
const productExceptSelf = function (number) {
	const length = number.length;
	const leftProducts = Array(length).fill(1);
	const rightProducts = Array(length).fill(1);
	const result = Array(length);

	for (let i = 1; i < length; i++) {
		leftProducts[i] = leftProducts[i - 1] * number[i - 1];
	}

	for (let i = length - 2; i >= 0; i--) {
		rightProducts[i] = rightProducts[i + 1] * number[i + 1];
	}

	for (let i = 0; i < length; i++) {
		result[i] = leftProducts[i] * rightProducts[i];
	}

	return result;
};

console.log(productExceptSelf([1, 2, 3, 4]));
