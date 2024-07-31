const binarySearchRecursiveFunction = function (array, target, start, end) {
    //Base condition
    if (start > end ) return false

    let middleIndex = Math.floor((start + end ) / 2)

    if(array[middleIndex] === target) {
        console.log("index: " , middleIndex)
        return true
    }

    //if element at middle is smaller than target
    //search left half of the middle index
    if(array[middleIndex] > target) {
        console.log("index: " , middleIndex)
        return binarySearchRecursiveFunction(array, target, start, middleIndex - 1)
    }
    else {
        console.log("index: " , middleIndex)
        return binarySearchRecursiveFunction(array, target, middleIndex + 1, end)
    }

}

const binarySearchIterativeFunction = (array, target) => {

    let end = array.length - 1
    let start = 0

    while (start <= end) {

        let middleIndex = Math.floor((start + end ) / 2)

        if (array[middleIndex] === target) {
            console.log("index: " , middleIndex)
            return true
        } else if (array[middleIndex] < target) {
            console.log("index: " , middleIndex)
            start = middleIndex + 1
        } else {
            console.log("index: " , middleIndex)
            end = middleIndex - 1
        }
    }
}

// Test Cases
let testArray = [1, 5, 7, 10, 12, 14, 15, 18, 20, 22, 25, 27, 30, 64];

if (binarySearchRecursiveFunction(testArray, 5, 0, testArray.length - 1)) {
    console.log("Element found!",);
} else {
    console.log("Element not found!");
}

if (binarySearchIterativeFunction(testArray, 5)) {
    console.log("Element found!");
} else {
    console.log("Element not found!");
}