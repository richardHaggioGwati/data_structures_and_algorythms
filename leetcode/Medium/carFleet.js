/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
const carFleet = function(target, position, speed) {
    const stack = []
    const length = position.length
    for (let index = 0; index < length; index++) {
        const time = (target - position[index]) / speed[index]
        stack.push([position[index], time])
    }
    stack.sort((a, b) => b[0] - a[0])
    let fleets = 0, lastTime = 0
    for (let index = 0; index < length; index++) {
        const [pos, time] = stack[index]
        if (time > lastTime) {
            fleets++
            lastTime = time
        }
        
    }
    return fleets
};

console.log(carFleet(12, [10,8,0,5,3], [2,4,1,1,3]))