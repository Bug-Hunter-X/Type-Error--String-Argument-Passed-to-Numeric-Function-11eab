# Type Error in TypeScript: String Argument to Numeric Function

This repository demonstrates a common type error in TypeScript where a function expecting numeric arguments receives string arguments. The TypeScript compiler catches this error, highlighting the importance of type safety. The solution shows how to handle such situations using type guards or input validation.

## Bug
The `bug.ts` file contains a function `add` that takes two numbers and returns their sum. However, it's called with string arguments, causing a type error.

## Solution
The `bugSolution.ts` file provides a solution by adding type guards to check the type of the input arguments before performing the addition.  This ensures type safety and prevents runtime errors.