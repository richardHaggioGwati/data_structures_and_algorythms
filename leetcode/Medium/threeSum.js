/**
 * @param {number[]} numbers
 * @return {number[][]}
 */
const threeSum = function (numbers) {
    const results = [];
    numbers.sort((a, b) => a - b);

    for (let i = 0; i < numbers.length - 2; i++) {
        let a = numbers[i];
        if (i > 0 && a === numbers[i - 1]) {
            continue;
        }

        let left = i + 1;
        let right = numbers.length - 1;

        while (left < right) {
            let sum = a + numbers[left] + numbers[right];

            if (sum > 0) {
                right -= 1;
            } else if (sum < 0) {
                left += 1;
            } else {
                results.push([a, numbers[left], numbers[right]]);
                left += 1;
                right -= 1;
                while (left < right && numbers[left] === numbers[left - 1]) {
                    left += 1;
                }
                while (left < right && numbers[right] === numbers[right + 1]) {
                    right -= 1;
                }
            }
        }
    }
    return results;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([0, 1, 1]));
console.log(threeSum([0, 0, 0]));
