function evaluatePostfix(S) {
  //your code here
  const op = ['*', '/', '-', '+'];
  const stack = [];
  for (const i of S) {
    // console.log(stack)
    if (op.includes(i)) {
      const a = stack.pop();
      const b = stack.pop();
      let result;
      switch (i) {
        case '+':
          result = a + b;
          break;
        case '-':
          result = a - b;
          break;
        case '*':
          result = a * b;

          break;
        case '/':
          result = a / b;
          break;
      }
      stack.push(result);
    } else {
      stack.push(parseInt(i));
    }
  }
  return stack.pop();
}
