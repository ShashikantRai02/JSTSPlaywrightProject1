let arr = [1, 2, 3];
console.log(arr);
// Add to END
arr.push(4);
console.log(arr);
// Remove from End
arr.pop();
console.log(arr);
arr.push(5, 6);
console.log(arr);
// Add to Begining
arr.unshift(0);
console.log(arr);
// Remove from begining
arr.shift();
console.log(arr);
// [1,2,3,5,6]
arr.splice(2, 1);
console.log(arr);
arr.splice(2, 0, 99);
arr.splice(2, 1, 99);
arr.splice(2, 2, 99);
console.log(arr);
// [1,2,99,5,6]
arr.splice(1, 2, 10, 20);
console.log(arr);
/* 
output-

[ 1, 2, 3 ]
[ 1, 2, 3, 4 ]
[ 1, 2, 3 ]
[ 1, 2, 3, 5, 6 ]
[ 0, 1, 2, 3, 5, 6 ]
[ 1, 2, 3, 5, 6 ]
[ 1, 2, 5, 6 ]
[ 1, 2, 99, 6 ]
[ 1, 10, 20, 6 ]

*/
