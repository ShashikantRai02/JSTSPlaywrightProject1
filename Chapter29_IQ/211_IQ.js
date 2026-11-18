class A {
  who() {
    return "A";
  }
}
class B extends A {
  who() {
    return "B>" + super.who();
  }
}
class C extends B {
  who() {
    return "c>" + super.who();
  }
}
console.log(new C().who());
/* 

output--
c>B>A

*/