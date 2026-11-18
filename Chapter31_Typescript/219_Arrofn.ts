//  Arrow function annotations
const multiply = (a: number, b: number): number => a * b;
//  Object annotations
let user: { name: string; age: number } = {
  name: "Alice",
  age: 37,
};
function sayHello(msg: string): void {
  console.log(msg);
}
// Function Annotations
function greet(name: string): string {
  return `Hello,${name}`;
}
