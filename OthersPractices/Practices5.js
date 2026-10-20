
const steps = ["open", "login", "search", "logout"];
const removed = steps.splice(1, 2);
console.log(removed.join(","));
console.log(steps.join(","));