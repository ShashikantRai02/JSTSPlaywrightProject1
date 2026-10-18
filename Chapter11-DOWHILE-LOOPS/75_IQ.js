//  Do while vs while
// while .. while will always check the condition first .
// let a = 10;
// while (a < 10) {
//   console.log(a);
//   a++;
// }
// no output for this above programm because condition is false
let a = 10;
do {
  console.log(a);
  a++;
} while (a < 10);
// output is 10 because do while execute once if condition is matching or not matching
