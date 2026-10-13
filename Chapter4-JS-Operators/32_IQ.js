let responseTime = 850;
let sla = 1000;
let slaStatus = responseTime <= sla ? "within sla" : "sla breached";
console.log(`Response:${responseTime}ms-${slaStatus}`);
// Template Literal
console.log(`what is the sla time?-${sla}`);
/* 

Response:850ms-within sla
what is the sla time?-1000


*/
