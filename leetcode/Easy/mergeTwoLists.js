/**
 * Definition for singly-linked list.
 * Linked lists are reference data types
 */

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = function(list1, list2) {
    const dummy = new ListNode() // Create dummy linked list -> static reference to the head of the merged list.
    let tail = dummy // Pointer -> points to the last node in the merged list.

    // While both lists have nodes
    while (list1 && list2) {
        // Compare the values in both lists and set the value to the tail
        if (list1.val <= list2.val) {
            tail.next = list1 
            list1 = list1.next
        } else {
            tail.next = list2
            list2 = list2.next
        }
        tail = tail.next // Move the current pointer forward
    }

    // Attach the remaining nodes from either list1 or list2
    if (list1) {
        tail.next = list1
    } else if (list2) {
        tail.next = list2
    }
    // Return the merged list, skipping the dummy node
    return dummy.next
};


/***
 * For test purposes
 */
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

// Create example lists
const list1 = new ListNode(1, new ListNode(3, new ListNode(5)));
const list2 = new ListNode(2, new ListNode(4, new ListNode(6)));

// Merge the lists
const mergedList = mergeTwoLists(list1, list2);

// Function to print the merged list
function printList(list) {
    let current = list;
    while (current) {
        console.log(current.val);
        current = current.next;
    }
}

printList(mergedList);  // Output: 1 2 3 4 5 6