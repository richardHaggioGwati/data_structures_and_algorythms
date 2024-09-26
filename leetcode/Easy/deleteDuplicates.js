/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function deleteDuplicates(head) {
    if (head == null || head.next == null) {
        return head
    }

    head.next = deleteDuplicates(head.next)

    if (head.val == head.next.val) {
        return head.next
    }

    return head
};

/***
 * For test purposes
 */
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

// Create example list
let head = new ListNode(1);
head.next = new ListNode(1);
head.next.next = new ListNode(2);
head.next.next.next = new ListNode(2);
head.next.next.next.next = new ListNode(3);

// Remove nodes
const removeDuplicates = deleteDuplicates(head);

// Print the resulting linked list
function printList(head) {
    let result = [];
    while (head) {
        result.push(head.val);
        head = head.next;
    }
    console.log(result.join(' -> '));
}

printList(removeDuplicates);  // Output: 13 -> 8