function getUnion(head1, head2) {
  // implement a method to get the union
  //your code here
  const hs = new Set();
  let cur1 = head1,
    cur2 = head2;
  while (cur1.next) {
    hs.add(cur1.val);
    cur1 = cur1.next;
  }
  hs.add(cur1.val);
  while (cur2) {
    if (!hs.has(cur2.val)) {
      cur1.next = new Node(cur2.val);
      cur1 = cur1.next;
    }
    cur2 = cur2.next;
  }
  return head1;
}
