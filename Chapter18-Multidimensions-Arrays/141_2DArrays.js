let grid = [
  [10, 20, 30],
  [40, 50, 60],
  [70, 80, 90],
];
console.log(grid[0][0]);
// console.log(grid[7][7]);
grid[0][0] = 99;
console.log(grid);
/* 
output-
10
[ [ 99, 20, 30 ], [ 40, 50, 60 ], [ 70, 80, 90 ] ]
*/
console.log(grid.length); // Row-3
console.log(grid[0].length); // Columns-3
/* 

10
[ [ 99, 20, 30 ], [ 40, 50, 60 ], [ 70, 80, 90 ] ]
3
3
*/
