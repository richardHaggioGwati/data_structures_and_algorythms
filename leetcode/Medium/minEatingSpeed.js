/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
const minEatingSpeed = function (piles, h) {
    let left = 1;
    let right = Math.max(...piles);
    let result = right;

    // Binary search to find the minimum speed
    while (left <= right) {
        let middle = Math.floor((left + right) / 2);
        let hoursNeeded = 0;

        for (let pile of piles) {
            hoursNeeded += Math.ceil(pile / middle);
        }

        if (hoursNeeded <= h) {
            result = middle; // Try a slower speed
            right = middle - 1;
        } else {
            left = middle + 1; // Try a faster speed
        }
    }

    return result;
};

console.log(minEatingSpeed([3, 6, 7, 11], 8))
console.log(minEatingSpeed([30,11,23,4,20], 5))
console.log(minEatingSpeed([30,11,23,4,20], 6))