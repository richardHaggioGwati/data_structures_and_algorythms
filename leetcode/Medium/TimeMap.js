/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */

class TimeMap {
	constructor() {
		this.map = new Map();
	}

	/**
	 * @param {string} key
	 * @param {string} value
	 * @param {number} timestamp
	 * @return {void}
	 */
	set(key, value, timestamp) {
		if (!this.map.has(key)) {
			this.map.set(key, [[value, timestamp]]);
		} else {
			this.map.get(key).push([value, timestamp]);
		}
	}

	/**
	 * @param {string} key
	 * @param {number} timestamp
	 * @return {string}
	 */
	get(key, timestamp) {
		let result = '';
		const values = this.map.get(key);

		//Binary Search
		let left = 0,
			right = values.length - 1;

		while (left <= right) {
			let mid = Math.floor((left + right) / 2);

			if (values[mid][1] <= timestamp) {
                result = values[mid][0];
                left = mid + 1;
			}else {
				right = mid - 1;
			}
		}
		return result;
	}
}

const obj = new TimeMap();
obj.set('foo', 'bar', 1);
obj.set('foo', 'var', 2);
obj.set('foo', 'zar', 3);

const param_2 = obj.get('foo', 4);
console.log('🚀 ~ param_2:', param_2);
