/**
 * @param {number[]} numbers
 * @return {number}
 */
const longestConsecutive = function(numbers) {
    if (numbers.length === 0) return 0;

    const numSet = new Set(numbers);
    let longestStreak = 0;

    for (let num of numSet) {
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;

            while (numSet.has(currentNum + 1)) {
                currentNum += 1;
                currentStreak += 1;
            }

            longestStreak = Math.max(longestStreak, currentStreak);
        }
    }

    return longestStreak;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]))
console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]))