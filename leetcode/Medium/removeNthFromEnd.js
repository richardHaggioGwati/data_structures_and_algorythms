/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = function(head, n) {
    let newLinkedList = new ListNode(0)
    newLinkedList.next = head

    let linkedListTraverser = head
    let size = 0

    while (linkedListTraverser !== null) {
        linkedListTraverser = linkedListTraverser.next
        size++
    }

    linkedListTraverser = newLinkedList

    for (let index = 0; index < size - n; index++) {
        linkedListTraverser = linkedListTraverser.next  
    }

    linkedListTraverser.next = linkedListTraverser.next.next

    return newLinkedList.next
};

console.log(removeNthFromEnd([1,2,3,4,5], 2))