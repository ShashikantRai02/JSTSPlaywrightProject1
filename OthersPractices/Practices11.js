//  Print a pyramid pattern using stars. For input n, print n rows where row i has (n-i) leading spaces and (2*i-1) stars.
let n = 8;
for (let i = 1; i <= n; i++) {
  let row = "";
  // Leading space
  for (let j = 1; j <= n - i; j++) {
    row = row + " ";
  }
  // stars
  for (let j = 1; j <= 2 * i - 1; j++) {
    row = row + "*";
  }
  console.log(row);
}
/* 
output- 
*
***
*****
*******
*********
***********
*************
***************


*/
