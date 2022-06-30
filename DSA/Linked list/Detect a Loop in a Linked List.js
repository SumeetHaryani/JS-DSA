/**
 * @param {ListNode} head
 * @return {boolean}
 */
// ALter
var hasCycle = function (head) {
  let oneStep = head,
    twoStep = head;
  if (!head) return false;
  if (head.next === head) {
    return true;
  }
  while (oneStep && twoStep && twoStep.next) {
    oneStep = oneStep.next;
    twoStep = twoStep.next.next;
    if (oneStep === twoStep) {
      return true;
    }
  }
  return false;
};
