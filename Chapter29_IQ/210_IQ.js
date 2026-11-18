class Bug {
  constructor(title, severity) {
    this.title = title;
    this.severity = severity;
  }
  display() {
    console.log("[" + this.severity + "]" + this.title);
  }
}
let b1 = new Bug("Login crash", "Critical");
let b2 = new Bug("Typo in footer", "low");
b1.display();
b2.display();
/* 
output---
[Critical]Login crash
[low]Typo in footer
*/
