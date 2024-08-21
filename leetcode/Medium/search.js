/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number}
 */
const search = function (numbers, target) {
	let left = 0,
		right = numbers.length - 1;

	while (left <= right) {
		let middleIndex = Math.floor((left + right) / 2);

		if (numbers[middleIndex] === target) {
			return middleIndex;
		}

		// Left sorted portion
		if (numbers[left] <= numbers[middleIndex]) {
			if (target >= numbers[left] && target < numbers[middleIndex]) {
				right = middleIndex - 1;
			} else {
				left = middleIndex + 1;
			}
		}
		// Right sorted portion
		else if (numbers[middleIndex] <= numbers[right]) {
			if (target > numbers[middleIndex] && target <= numbers[right]) {
				left = middleIndex + 1;
			} else {
				right = middleIndex - 1;
			}
		}
	}
	return -1;
};
console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
