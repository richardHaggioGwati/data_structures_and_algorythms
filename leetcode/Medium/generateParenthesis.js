/**
 * @param {number} number
 * @return {string[]}
 */
const generateParenthesis = function (number) {
	const result = [];

	/**
     * @param {string} current
	 * @param {number} openN
     * @param {number} closedN
	 * @return {void}
	 */
    const backTrack = (current, openN, closedN) => {
        if (current.length === number * 2) {
            result.push(current)
            return
        }

		if (openN < number) 
			backTrack(current + '(', openN + 1, closedN);

		if (closedN < openN)
			backTrack(current + ')',openN, closedN + 1);

	};

    backTrack('', 0, 0);
    return result
};

console.log(generateParenthesis(3));
console.log(generateParenthesis(1));
