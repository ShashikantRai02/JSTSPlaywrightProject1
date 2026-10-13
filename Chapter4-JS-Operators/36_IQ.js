let temp = 35;
let feel =
  temp >= 40
    ? "very hot"
    : temp >= 30
      ? "Hot"
      : temp >= 20
        ? "warm"
        : temp >= 10
          ? "Cool"
          : "Cold";
console.log("7. Temperature:", temp, "| Feel:", feel);

/* 

7. Temperature: 35 | Feel: Hot
*/
