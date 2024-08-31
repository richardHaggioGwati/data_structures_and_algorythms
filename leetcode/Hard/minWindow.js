/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
function minWindow(s, t) {
	const isMissingArgs = !s.length || !t.length;
	if (isMissingArgs) return '';

    const frequencyMap = getFrequencyMap(t);
    const { start, end } = getWindowPointers(s, t, frequencyMap)
    
    return getSubstring(s, start, end)
}
/**
 * @param {string} string
 * @return {Map<string, string>} frequencyMap
 */
function getFrequencyMap(string) {
	const frequencyMap = new Map();
	for (const char of string) {
		frequencyMap.set(char, (frequencyMap.get(char) || 0) + 1);
	}
	return frequencyMap;
}
/**
 * @param {string} s
 * @param {string} t 
 * @param {Map<string, string>} frequencyMap
 * @return {{start: number, end: number}}
 */
function getWindowPointers(s, t, frequencyMap) {
    let [left, right, matched, start, end] = [0, 0, 0, 0, s.length + 1]
    
    while (right < s.length) {
        matched = addRightFrequency(s, right, frequencyMap, matched)

        const canSlide = () => matched === t.length
        while (canSlide()) {
            const window = right - left + 1

            const isSmaller = window < end
            if (isSmaller) {
                [start, end] = [left, window]
            }
            matched = subtractLeftFrequency(s, left, frequencyMap, matched)
            left++
        }
        right++
    }
    return {start, end}
}
/**
 * @param {string} s
 * @param {number} right
 * @param {Map<string, string>} frequencyMap
 * @param {number} matched
 * @return {number}
 */
function addRightFrequency(s, right, frequencyMap, matched) {
    const char = s[right]

    if (frequencyMap.has(char)) {
        frequencyMap.set(char, frequencyMap.get(char) - 1)

        const isInWindow = 0 <= frequencyMap.get(char)
        if (isInWindow) matched++
    }
    return matched
}
/**
 * @param {string} s
 * @param {number} left
 * @param {Map<string, string>} frequencyMap
 * @param {number} matched
 * @return {number}
 */
function subtractLeftFrequency(s, left, frequencyMap, matched) {
    const char = s[left]

    if (frequencyMap.has(char)) {
        const isOutOfWindow = frequencyMap.get(char) === 0
        if (isOutOfWindow) matched--

        frequencyMap.set(char, frequencyMap.get(char) + 1)
    }

    return matched
}
/**
 * @param {string} s
 * @param {number} start
 * @param {number} end
 * @return {string}
 */
function getSubstring(s, start, end) {
    return end <= s.length ? s.slice(start, start + end) : ''
}

console.log(minWindow('ADOBECODEBANC', 'ABC')); //BANC
console.log(minWindow('a', 'a')); //a
console.log(minWindow('a', 'aa')); //"" 
