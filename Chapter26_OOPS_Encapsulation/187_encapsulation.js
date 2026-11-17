class Person {
  // hide my variable
  #child1;
  #child2;
  constructor(name, child1, child2) {
    this.name = name;
    this.#child1 = child1;
    this.#child2 = child2;
  }
  getchild() {
    // Mother
    return this.#child1;
  }
  setchild(changed_name) {
    // Wife
    this.#child1 = changed_name;
  }
}
let p = new Person("Shashikant", "Krisha", "Shivansh");
//console.log(p.#child1)
console.log(p.getchild());
p.setchild("editkrishaa");
console.log(p.getchild());
console.log(p.name);
p.name = "Akash";
console.log(p.name);

/* 
Krisha
editkrishaa
Shashikant
Akash

*/
