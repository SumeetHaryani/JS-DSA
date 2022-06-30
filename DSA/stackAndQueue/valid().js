var isValid = function (s) {
  const stack = [];
  for (const i of s) {
    // console.log(stack)
    if (i === ')' || i === '}' || i === ']') {
      const val = stack.pop();
      if (i == ')' && val != '(') return false;
      else if (i == '}' && val != '{') return false;
      else if (i == ']' && val != '[') return false;
    } else {
      stack.push(i);
    }
  }

  if (stack.length) {
    return false;
  }
  return true;
};
