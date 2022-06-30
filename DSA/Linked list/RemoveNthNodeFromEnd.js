var removeNthFromEnd = function (head, n) {
  let slow = (fast = head),
    index = 0;
  //Move fast in front so that the gap between slow and fast becomes n

  while (index < n) {
    fast = fast.next;
    index++;
  }
  if (!fast) return head.next;
  //Move fast to the end, maintaining the gap

  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }
  slow.next = slow.next.next;
  return head;
};
