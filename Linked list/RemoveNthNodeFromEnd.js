var removeNthFromEnd = function (head, n) {
  let slow = (fast = head),
    index = 0;
  while (index < n) {
    fast = fast.next;
    index++;
  }
  if (!fast) return head.next;

  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }
  slow.next = slow.next.next;
  return head;
};
