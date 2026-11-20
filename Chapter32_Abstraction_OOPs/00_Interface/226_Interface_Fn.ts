interface Calculator {
  add(a: number, b: number): number;
  substract(a: number, b: number): number;
}
const calc: Calculator = {
  add: (a, b) => a + b,
  substract: (a, b) => a - b,
};
console.log(calc.add(10, 20));
