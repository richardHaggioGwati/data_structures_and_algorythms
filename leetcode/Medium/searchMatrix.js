/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrixFlatArray = function(matrix, target) {
    const array = []

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            array.push(matrix[i][j])
        }
    }

    let start = 0
    let end = array.length - 1

    while (start <= end) {
        let middle = Math.floor((start + end) / 2)

        if (array[middle] === target) {
            return true
        } else if (array[middle] > target) {
            end = middle - 1
        } else {
            start = middle + 1
        }
    }

    return false
};

function searchMatrix(matrix, target) {
    let rows = matrix.length, cols = matrix[0].length;
    let top = 0, bottom = rows - 1;

    // Binary search to find the correct row
    while (top <= bottom) {
        let row = Math.floor((top + bottom) / 2);

        if (target > matrix[row][cols - 1]) {
            top = row + 1; // Move downwards in the matrix
        } else if (target < matrix[row][0]) {
            bottom = row - 1; // Move upwards in the matrix
        } else {
            break; // Target is within the range of this row
        }
    }

    // If row search failed
    if (top > bottom) {
        return false;
    }

    // The row where the target might be located
    let row = Math.floor((top + bottom) / 2);
    let left = 0, right = cols - 1;

    // Binary search within the row
    while (left <= right) {
        let middle = Math.floor((left + right) / 2);

        if (target > matrix[row][middle]) {
            left = middle + 1;
        } else if (target < matrix[row][middle]) {
            right = middle - 1;
        } else {
            return true; // Target found
        }
    }

    return false; // Target not found within the row
}


console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3))
