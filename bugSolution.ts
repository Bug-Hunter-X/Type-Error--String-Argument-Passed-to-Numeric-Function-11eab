function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: any, b: any): number {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else {
    console.error("Invalid input: Arguments must be numbers");
    return 0; // Or throw an error
  }
}

let result1 = addSafe(10, 20); // Correct: 30
let result2 = addSafe("hello", "world"); // Error message: Invalid input
let result3 = addSafe(10, "world"); // Error message: Invalid input