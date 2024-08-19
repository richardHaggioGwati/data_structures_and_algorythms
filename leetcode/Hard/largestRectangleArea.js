/**
 * @param {number[]} heights
 * @return {number}
 */
const largestRectangleArea = function(heights) {
    let maxArea = 0;
    const stack = []; // stores pairs of (index, height)

    for (let i = 0; i < heights.length; i++) {
        let start = i;
        while (stack.length > 0 && stack[stack.length - 1][1] > heights[i]) {
            const [index, height] = stack.pop();
            maxArea = Math.max(maxArea, height * (i - index));
            start = index;
        }
        stack.push([start, heights[i]]);
    }
    for (let [index, height] of stack) {
        maxArea = Math.max(maxArea, height * (heights.length - index));
    }
    return maxArea;
};
console.log(largestRectangleArea([2,1,5,6,2,3]))
