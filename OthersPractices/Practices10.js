// Print a left-aligned triangle pattern. For input n, print n rows in reverse order.
let n = 4;
for (let i = n; i >= 1; i--) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row = row + "*";
  }
  console.log(row);
}
/*
output-  
****
***
**
*
*/
