let arr1 = [10, 20, 30, 40];
console.log(arr1.length);
console.log(arr1[4]);
console.log(arr1(4));
/* 
output-

4
undefined
c:\JSTSPlaywrightProject1\Chapter12-Arrays\80_Arrays.js:4
console.log(arr1(4));
            ^

TypeError: arr1 is not a function
    at Object.<anonymous> (c:\JSTSPlaywrightProject1\Chapter12-Arrays\80_Arrays.js:4:13)
    at Module._compile (node:internal/modules/cjs/loader:1929:14)
    at Object..js (node:internal/modules/cjs/loader:2060:10)
    at Module.load (node:internal/modules/cjs/loader:1651:32)
    at Module._load (node:internal/modules/cjs/loader:1443:12)
    at wrapModuleLoad (node:internal/modules/cjs/loader:261:19)
    at Module.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:154:5)
    at node:internal/main/run_main_module:33:47

Node.js v24.20.0

*/
