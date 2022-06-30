/*
     Function to remove duplicates
     from a unsorted linked list
     */
function removeDuplicate(head) {
  // Hash to store seen values
  var hs = new Set();

  /* Pick elements one by one */
  var current = head;
  var prev = null;
  while (current != null) {
    var curval = current.val;

    // If current value is seen before
    if (hs.has(curval)) {
      prev.next = current.next;
    } else {
      hs.add(curval);
      // update prev ptr only when nothing to delete else prev stays there istlef
      prev = current;
    }
    current = current.next;
  }
}
