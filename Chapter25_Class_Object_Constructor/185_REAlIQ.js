class Student {
  static collegeName = "VGI";
  static mentorName = "pramoddata";
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }
  static display() {
    console.log(
      this.name + "are part of the",
      Student.collegeName + this.score,
    );
  }
  nsf() {
    console.log(this.name);
  }
}
let krisha = new Student("Krisha", 90);
let shivansh = new Student("Shivansh", 91);
let shyam = new Student("Shyam", 88);
let anjali = new Student("Anjali", 99);
console.log(Student.collegeName);
console.log(krisha.name);
console.log(shivansh.name);
console.log(krisha.score);
// console.log(Student.display())
/* 
VGI
Krisha
Shivansh
90
*/
