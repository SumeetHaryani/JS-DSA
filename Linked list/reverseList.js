/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (!head) {
    return head;
  }
  let current = head,
    next = head.next,
    temp;

  current.next = null;
  while (next) {
    temp = next.next;
    next.next = current;
    current = next;
    next = temp;
  }
  head = current;
  return head;
};
