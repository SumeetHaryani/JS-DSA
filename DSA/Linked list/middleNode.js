// This is the simplest way to go about this problem. We traverse the whole list to find its length. The middle position can be calculated by halving the length (line 21).
// Note: For any length, the middle value would be at,
//     middle = Math.ceil(length/2)
// Then we iterate until the middle index and return the value of that node (line 24).
// Time Complexity #
// The algorithm makes a linear traversal over the list. Hence, the time complexity is O(n). But notice we need to make two traversals; one to find the length and other two find the middle node.
// Think of it this way:

// The fast pointer moves two steps at a time until​ the end of the list (line 26)
// The slow pointer moves one step at a time (line 25)
// When the fast pointer reaches the end, the slow node will be at the middle (line 24)
// Using this algorithm, we can make the process faster because the calculation of the length and the traversal to the middle are happening side-by-side.

// Time Complexity #
// We are traversing the linked list at twice the speed, so it is certainly faster. However, the bottleneck complexity is still O(n).
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
var middleNode = function (head) {
  let slow = (fast = head);

  //     If there are two middle nodes, return the second middle node.
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};
