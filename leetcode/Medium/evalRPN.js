/**
 * @param {string[]} tokens
 * @return {number}
 */
const evalRPN = function(tokens) {
    const stack = []
    for (let index = 0; index < tokens.length; index++) {
        const token = tokens[index]

        if (!isNaN(token)) {
            stack.push(Number(token))
        } else {
            let a = stack.pop()
            let b = stack.pop()

            switch (tokens[index]) {
                case "*":
                    stack.push(a * b)
                    break;
                case "+":
                    stack.push(a+b)
                    break
                case "/":
                    stack.push(Math.trunc(b / a))
                    break
                case "-":
                    stack.push(b - a)
                    break
            }
        }
    }
    return stack.pop()
};

console.log(evalRPN(["2","1","+","3","*"])) //  9
console.log(evalRPN(["4","13","5","/","+"])) // 6
console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"])) //22