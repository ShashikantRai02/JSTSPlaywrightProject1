let statusCode = 404;
let category =
  statusCode < 300
    ? "success"
    : statusCode < 400
      ? "Redirect"
      : statusCode < 500
        ? "Client error"
        : "Server Error";
console.log(`status ${statusCode}:${category}`)

/* 
output- status 404:Client error


*/