/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

class MinStack {
    constructor() {
        this.stack = new Array()
        this.minStack = new Array()
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val)

        if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
            this.minStack.push(val)
        }
        return
    }

    /**
     * @return {void}
     */
    pop() {
        const poppedValue = this.stack.pop()

        if (poppedValue === this.minStack[this.minStack.length - 1]) {
            this.minStack.pop()
        }
        return
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}

const minStack = new MinStack()
minStack.push(-2);
console.log("🚀 ~ minStack:", minStack)
minStack.push(0);
console.log("🚀 ~ minStack:", minStack)
minStack.push(-3);
console.log("🚀 ~ minStack:", minStack)
minStack.getMin(); // return -3
console.log("🚀 ~ minStack:", minStack)
console.log("🚀 ~ min:", minStack.getMin())
minStack.pop();
console.log("🚀 ~ minStack:", minStack)
minStack.top();    // return 0
console.log("🚀 ~ minStack:", minStack)
minStack.getMin(); // return -2
console.log("🚀 ~ minStack:", minStack)