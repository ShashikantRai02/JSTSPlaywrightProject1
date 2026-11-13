class Person {
  // Attributes | Instance variables |  Data members | Properties
  #name;
  #age;
  #rollno;
  #phoneno;
  //      Constructor, Attributes, Behaviour - CAB
   // # Constructor
    //  **A special function that runs automatically, 
    // once, at the moment an object is born.**
    constructor(){
        console.log("I  will be called whenever object is created ")
    }

  // Behaviour | Methods | Members Functions |
  eat() {}
  sleep() {}
}
// # and we are not using function key in class for the f(n)function
// CAB -> Class has the Attribute, Behaviour
const shashikant = new Person();
// Object -> new Person();
// Object Ref -> shashikant
const shashi = new Person();
