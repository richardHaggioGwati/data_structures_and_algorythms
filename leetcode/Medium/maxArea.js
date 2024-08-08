/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function(height) {
    let left = 0
    let right = height.length - 1
    let result = 0

    while (left < right) {
        let area = (right - left) * Math.min(height[left], height[right])
        result = Math.max(result, area)

        if (height[left] < height[right]) {
            left += 1
        } else {
            right -= 1
        }
    }
    return result
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]))