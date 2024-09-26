/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function removeNodesRecursion(head) {
    if (head == null || head.next == null) {
        return head;
    }
    
    head.next = removeNodesRecursion(head.next);

    if (head.val < head.next.val) {
        return head.next;
    }

    return head;
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function removeNodes(head) {
    head = reverseList(head)
    
    let maxValue = -Infinity
    let current = head
    let prev = null

    while (current) {
        if (current.val >= maxValue) {
            maxValue = current.val
            prev = current
        } else {
            prev.next = current.next
        }
        current = current.next
    }

    return reverseList(head)
};

// Helper function to reverse a linked list
function reverseList(head) {
    let prev = null;
    let current = head;
    while (current) {
        let nextNode = current.next;
        current.next = prev;
        prev = current;
        current = nextNode;
    }
    return prev;
}

/***
 * For test purposes
 */
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

// Create example list
let head = new ListNode(5);
head.next = new ListNode(2);
head.next.next = new ListNode(13);
head.next.next.next = new ListNode(3);
head.next.next.next.next = new ListNode(8);

// Remove nodes
const remove = removeNodesRecursion(head);

// Print the resulting linked list
function printList(head) {
    let result = [];
    while (head) {
        result.push(head.val);
        head = head.next;
    }
    console.log(result.join(' -> '));
}

printList(remove);  // Output: 13 -> 8