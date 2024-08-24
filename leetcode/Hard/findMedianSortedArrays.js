/**
 * @param {number[]} numbers1
 * @param {number[]} numbers2
 * @return {number}
 */
const findMedianSortedArrays = function(numbers1, numbers2) {
    let A = numbers1;
    let B = numbers2;
    const total = A.length + B.length;
    const half = Math.floor(total / 2);

    // Ensure A is the smaller array
    if (B.length < A.length) {
        A = numbers2;
        B = numbers1;
    }

    let left = 0;
    let right = A.length - 1;

    while (true) {
        let aPointer = Math.floor((left + right) / 2); // Pointer for A
        let bPointer = half - aPointer - 2; // Pointer for B

        // Values around the partition
        let aLeft = aPointer >= 0 ? A[aPointer] : Number.NEGATIVE_INFINITY;
        let aRight = (aPointer + 1) < A.length ? A[aPointer + 1] : Number.POSITIVE_INFINITY;

        let bLeft = bPointer >= 0 ? B[bPointer] : Number.NEGATIVE_INFINITY;
        let bRight = (bPointer + 1) < B.length ? B[bPointer + 1] : Number.POSITIVE_INFINITY;

        // Check if correct partition
        if (aLeft <= bRight && bLeft <= aRight) {
            // If odd total length, return the middle element
            if (total % 2) {
                return Math.min(aRight, bRight);
            }
            // If even total length, return the average of the two middle elements
            return (Math.max(aLeft, bLeft) + Math.min(aRight, bRight)) / 2;
        } else if (aLeft > bRight) {
            right = aPointer - 1;
        } else {
            left = aPointer + 1;
        }
    }
};

console.log(findMedianSortedArrays([1, 3], [2]));
