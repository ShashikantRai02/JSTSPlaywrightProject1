/* 
**Q2. [Easy]** What is the output?

```js
for (let i = 0; i < 3; i++) {
  console.log(i);
}
```
- A) 0 1 2
- B) 1 2 3
- C) 0 1 2 3
- D) 1 2

*/
// for (let i = 0; i < 3; i++) {
//   console.log(i);
// }
// A option is correct

//  ===================================================

/* 

**Q3. [Easy]** What is the output?

```js
let i = 0;
while (i < 5) {
  i++;
}
console.log(i);
```
- A) 4
- B) 5
- C) 0
- D) Infinite loop

*/
// let i = 0;
// while (i < 5) {
//   i++;
// }
// console.log(i);
// output is 5
// ==========================================================
/* **Q4. [Easy]** What is the output?

```js
let i = 10;
do {
  console.log(i);
} while (i < 5);
```
- A) Prints 10
- B) Prints nothing
- C) Prints 10 five times
- D) Infinite loop
 */
/* let i = 10;
do {
  console.log(i);
} while (i < 5); */
// output is 10
// ===============================================================

/* **Q5. [Easy]** What is the output?

```js
let count = 0;
for (let i = 5; i < 5; i++) {
  count++;
}
console.log(count);
```
- A) 0
- B) 5
- C) 1
- D) Infinite loop
 */
let count = 0;
for (let i = 5; i < 5; i++) {
  count++;
}
console.log(count);
//  output is 0
