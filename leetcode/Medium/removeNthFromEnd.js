/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
function removeNthFromEnd_(head, n) {
	let newLinkedList = new ListNode(0);
	newLinkedList.next = head;

	let linkedListTraverser = head;
	let size = 0;

	while (linkedListTraverser !== null) {
		linkedListTraverser = linkedListTraverser.next;
		size++;
	}

	linkedListTraverser = newLinkedList;

	for (let index = 0; index < size - n; index++) {
		linkedListTraverser = linkedListTraverser.next;
	}

	linkedListTraverser.next = linkedListTraverser.next.next;

	return newLinkedList.next;
};

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 * Using two pointers
 */
function removeNthFromEnd(head, n) {
    const dummy = new ListNode(0, head) // ste first dummy node
    let left = dummy 
    let right = head
 
    while (right && n > 0) {
        right = right.next
        n -= 1
    }

    while (right) {
        left = left.next
        right = right.next
    }

    //delete
    left.next = left.next.next
    return dummy.next
}

// Test Purposes
/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
	this.val = val === undefined ? 0 : val;
	this.next = next === undefined ? null : next;
}

const list = new ListNode(
	1,
	new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))),
);

const removedNode = removeNthFromEnd(list, 3)

function printList(removedNode) {
    let current = removedNode
    while (current) {
        console.log(current.val)
        current = current.next
    }
}

printList(list)
