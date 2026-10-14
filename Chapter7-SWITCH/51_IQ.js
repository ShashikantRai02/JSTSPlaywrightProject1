// In JavaScript, break in a switch statement is used to stop execution of the switch after a matching
let day = 2;
switch (day) {
  case 0:
    console.log("Sunday -Rest day");
  case 1:
    console.log("Monday- Sprint planning");
  case 2:
    console.log("Tuesday -Development");
  case 3:
    console.log("Wednesday-code review ");
  case 4:
    console.log("Thursday-Testing");
  case 5:
    console.log("Friday -Deployment & Retrospective meeting");
  case 6:
    console.log("Saturday- Rest day");
  default:
    console.log("Invalid day value");
}
/* 
output- Tuesday -Development
Wednesday-code review 
Thursday-Testing
Friday -Deployment & Retrospective meeting
Saturday- Rest day
Invalid day value
*/
