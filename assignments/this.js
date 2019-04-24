/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. When using the word "this" in a global scope of a function, the word "this" become the window/console Object.
* 2. While using the term "this" as implicit binding, It will be use to target a name/method in the function. 
* 3. New binding "this" is use to target new object creation within a function.
* 4. The Explicit Binding will be use to bind previous "this" Object to overide or assigned new dotnotations to the statements like call or apply.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function personName(name) {
console.log(this);
return name;
}
personName("Juan");

// Principle 2

// code example for Implicit Binding

const someObj = {
  says: "Hi",
  sayHi: function(person) {
    console.log(`${this.says} I am ${person}`);
  }
};
someObj.sayHi("Juan");

// Principle 3

// code example for New Binding

function someOne(sayHello) {
  this.hi = "Hi ";
  this.sayHello = sayHello;
  this.speak = function () {
  console.log(this.hi + this.sayHello);
  console.log(this);
  };
}

const juan = new someOne("John");
const john = new someOne("Juan");

juan.speak();
john.speak();

// Principle 4

// code example for Explicit Binding

function someOne(sayHello) {
  this.hi = "Hi ";
  this.sayHello = sayHello;
  this.speak = function () {
  console.log(this.hi + this.sayHello);
  console.log(this);
  };
}

const juan = new someOne("John");
const john = new someOne("Juan");

juan.speak.call(john);
john.speak.apply(juan);

juan.speak();
john.speak();