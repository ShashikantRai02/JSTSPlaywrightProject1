// interface. used in API Testing
interface APIResponse {
  statusCode: number;
  body?: string;
  headers?: object;
  responseTime: number;
}
//  GET -> body optional
// POST -> important
const responseDataGET: APIResponse = {
  statusCode: 200,
  responseTime: 200,
};
const responseDataPOST: APIResponse = {
  statusCode: 200,
  body: "{'name':'shashikant'}",
  responseTime: 200,
  headers: {},
};
console.log(responseDataGET);
console.log(responseDataPOST);
/* 

{ statusCode: 200, responseTime: 200 }
{
  statusCode: 200,
  body: "{'name':'shashikant'}",
  responseTime: 200,
  headers: {}
}
*/
