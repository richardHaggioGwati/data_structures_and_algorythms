/**
 * @param {number[]} height
 * @return {number}
 */
const trap = function (height) {
    if (!height) return 0

    let left = 0, right = height.length - 1
    let maxLeft = height[left], maxRight = height[right]
    let result = 0

    while (left < right) {
        if (maxLeft < maxRight) {
            left += 1
            maxLeft = Math.max(maxLeft, height[left])
            result += maxLeft - height[left]
        } else {
            right -= 1
            maxRight = Math.max(maxRight, height[right])
            result += maxRight - height[right]
        }
        
    }
    return result
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]))
console.log(trap([4,2,0,3,2,5]))