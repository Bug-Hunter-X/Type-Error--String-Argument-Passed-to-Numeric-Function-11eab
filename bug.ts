function add(a: number, b: number): number {
  return a + b;
}

let result = add("hello", "world"); // Type error: Argument of type 'string' is not assignable to parameter of type 'number'.