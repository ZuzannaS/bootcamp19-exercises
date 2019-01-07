// Part 1:
//  - What will print and why?
//1 -> it starts from printing a, which was set to 1
//2 -> it calls y, which at the beginning prints a = 2
//undefined -> at the end of y it calls function x, which declares a, but does not give it a value
//  - What will change if we delete line 5? Why?
// it will print 1 2 1, becuse whet it calls x, we do not declare 
// a again, so it uses the value declared earlier in the code, but not 
//inside funcion, so it uses var a = 1

// Part 2:
// - change to ES6 syntax
/*function x() {
  console.log(a);
}

function y() {
  const a = 2;
  console.log(a);
  x();
}

const a = 1;
console.log(a);
y();*/

// Part 3:
// - modify so that it prints 1, 2, 2 in that order. Console.logs must stay in place.

function x() {
  //const a;
  console.log(a);
}

function y() {
  a = 2;
  console.log(a);
  x();
}

let a = 1;
console.log(a);
y();
