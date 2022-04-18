var getIntersectionNode = function (headA, headB) {
  let cur1 = headA,
    cur2 = headB;
  const hs = new Set();
  while (cur1) {
    hs.add(cur1);
    cur1 = cur1.next;
  }
  while (cur2) {
    if (hs.has(cur2)) {
      return cur2;
    }
    cur2 = cur2.next;
  }
};
