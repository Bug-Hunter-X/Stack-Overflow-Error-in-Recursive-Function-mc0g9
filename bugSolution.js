function foo(a, b) {
  while (a > 0) {
    b += a;
    a--;
  }
  return b;
}

//Alternative solution using recursion with base case
function fooRecursive(a, b) {
  if (a === 0) {
    return b; 
  } else if (a < 0) { //Handle negative input
    return fooRecursive(0, b); //Corrected base case
  } else{
    return fooRecursive(a - 1, a + b);
  }
}