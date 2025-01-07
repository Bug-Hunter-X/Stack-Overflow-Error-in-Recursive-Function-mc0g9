# Stack Overflow Error in JavaScript Recursive Function

This repository demonstrates a common error in JavaScript: stack overflow errors caused by unbounded recursion. The `bug.js` file contains a function `foo` that recursively calls itself. When the input `a` is a large positive integer, the function will eventually exceed the maximum call stack size, resulting in a stack overflow error.

The `bugSolution.js` file provides a corrected version of the function that avoids this issue by using iteration instead of recursion.