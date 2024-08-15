/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
const dailyTemperatures = function (temperatures) {
	const stack = [],
		length = temperatures.length; results = Array(length).fill(0)

	for (let index = 0; index < length; index++) {
        while (stack.length > 0 && temperatures[index] > temperatures[stack[stack.length - 1]]) {
            const prevIndex = stack.pop()
            results[prevIndex] = index - prevIndex
        }
        stack.push(index)
	}

	return results;
};  

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
console.log(dailyTemperatures([30, 40, 50, 60]));
console.log(dailyTemperatures([30, 60, 90]));
