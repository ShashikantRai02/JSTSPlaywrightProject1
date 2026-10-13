//What is the output of the following expressions. Answer in the comments below.
// 1.
/* let a = 100;

console.log(a++ + ++a + a++ + ++a);
calculation 101+102+103+104
calculation 100+101+103+104

console.log(a);

output- 408,104 */
/* 
 2.
let a = 37;

console.log(--a + a--);
 calculation 36+36=72

console.log(a);

output: 72,35 */

/* 

The important thing is to understand the difference between pre-decrement (--a) and post-decrement (a--).
1. Difference between --a and a--
Operator	Name	What happens?
--a	Pre-decrement	Decreases a by 1 first, then uses the updated value.
a--	Post-decrement	Uses the current value first, then decreases a by 1.

*/
/* 
let a = 5;
console.log(--a + a--);
console.log(a)
output - 8,3 */
/* //3.
let a = 5;
let b = a-- - --a;
cal 5-3=2
a=3
console.log(b, a);
output- 2,3 */
/* 

Remember this interview trick
Expression	Value used	Value afterward
a--	5	4
--a	3	3
The key is that a-- uses the old value, whereas --a decreases the variable before using its value.
*/

/* //4.
let i = 1;

let r = i++ > 1 ? i++ : ++i;

console.log(r, i);

(output - 3, 3); */

/* 
condition ? value_if_true : value_if_false;


- If the condition is true, execute the expression after ?.
- If the condition is false, execute the expression after :.

*/
