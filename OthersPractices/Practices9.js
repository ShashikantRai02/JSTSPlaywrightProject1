// Print a right triangle pattern using stars. For input n, print n rows where row i has i stars.
let n = 3;
for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row = row + "*";
  }
  console.log(row);
}
/* 
output - 

*
**
***

*/
