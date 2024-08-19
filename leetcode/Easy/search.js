/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number}
 */
const search = function(numbers, target) {
    let start = 0
    let end = numbers.length - 1

    while(start <= end) {
        let middleIndex = Math.floor((start + end) / 2)

        if(numbers[middleIndex] === target) {
        return middleIndex
        } else if(numbers[middleIndex] < target) {
            start = middleIndex + 1
        } else{
            end = middleIndex - 1
        }
    }
    return -1
};

console.log(search([-1,0,3,5,9,12], 9))
