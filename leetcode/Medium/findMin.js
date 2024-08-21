/**
 * @param {number[]} numbers
 * @return {number}
 */
const findMin = function(numbers) {
    let result = numbers[0];
    let left = 0;
    let right = numbers.length - 1;
    
    while (left < right) {
        // If the array is already sorted, return the leftmost element
        if (numbers[left] < numbers[right]) {
            result = Math.min(result, numbers[left]);
            break;
        }

        let middle = Math.floor((left + right) / 2);
        result = Math.min(result, numbers[middle]);

        if (numbers[middle] >= numbers[left]) {
            // Minimum is in the right half
            left = middle + 1;
        } else {
            // Minimum is in the left half
            right = middle;
        }
    }

    // After the loop, left will point to the minimum element
    return Math.min(result, numbers[left]);
};

console.log(findMin([3,4,5,1,2]))
console.log(findMin([4,5,6,7,0,1,2]))
console.log(findMin([11,13,15,17]))
