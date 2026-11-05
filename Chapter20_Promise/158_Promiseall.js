let checkauth = Promise.resolve("Auth OK");
let checkdb = Promise.resolve("DB OK");
let checkcache = Promise.resolve("cache  ok");
Promise.all([checkauth, checkdb, checkcache]).then(function (results) {
  console.log("All checks:", results);
});
Promise.all([
  Promise.resolve("ok"),
  Promise.reject("DB Down"),
  Promise.resolve("ok"),
])
  .then(function (r) {
    console.log(r);
  })
  .catch(function (err) {
    console.log("Failed:", err);
  });
/* 


All checks: [ 'Auth OK', 'DB OK', 'cache  ok' ]
Failed: DB Down
*/
