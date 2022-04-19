// This loops is like BFS of a tree with 1 as root
// 0 as left child and 1 as right child and so on
function generate(N) {
  let q = [],
    s1,
    s2;
  const result = [];
  q.push('1');
  for (let i = 0; i < N; i++) {
    result.push(q.shift());
    s1 = result[i] + '0';
    s2 = result[i] + '1';

    q.push(s1);
    q.push(s2);
  }
  return result;
  //your code here
}
