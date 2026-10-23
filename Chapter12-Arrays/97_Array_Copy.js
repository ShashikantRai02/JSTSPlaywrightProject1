let original = [1, 2, 3];
let copy1 = [...original];
console.log(original);
console.log(copy1);
let copy2 = original.slice();
copy2.push(92);
copy1.push(93);
console.log(original);
console.log(copy1);
console.log(copy2);
// Deep copy
let deep_copy_array = original;
// Deep copy
deep_copy_array.push(91);
console.log(original);
console.log(deep_copy_array);
/* 
output-

[ 1, 2, 3 ]
[ 1, 2, 3 ]
[ 1, 2, 3 ]
[ 1, 2, 3, 93 ]
[ 1, 2, 3, 92 ]
[ 1, 2, 3, 91 ]
[ 1, 2, 3, 91 ]
*/
