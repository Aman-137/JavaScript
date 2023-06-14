// var vs let vs const
// scope

// var a = 5;
// console.log(a);
// {
//   var a = 5;
// }
// console.log(a);
// {
//   let b = 5;
//   console.log(b);
// }
// {
//   const c = 10;
//   console.log(c);
// }

// shadowing

// function test() {
//   let a = "Hello";

//   if (true) {
//     let a = "Hi";
//     console.log(a);
//   }

//   console.log(a);
// }

// test();

// function test() {
//   var a = "Hello";
//   let b = "bye";

//   if (true) {
//     let a = "Hi";
//     var b = "good bye"; // illegal shadowing
//     console.log(a);
//     console.log(b);
//   }
// }

// test();

// Declaration type question

// var a;
// var a;

// let a;
// let a;

// let a;
// {
//   let a; // this is ok because of shadowing
// }

// Declaration without initialization
// with var and let it is ok

// const a = 13; // const has to initialized when declared.

// Re-initialization

// var a = 5;
// a = 10;
// let b = 5;
// b = 6;
// console.log(b, a);

// const c = 8;
// c = 9; // assignment to constant variable
// // i.e; var and let can be updated but const can never be updated.

// Hoisting

// console.log(count);
// var count = 1;
// console.log(count);

// console.log(a); // Refference Error (Temporal dead Zone)
// // TDZ - the time between the declaration and initialization of let and const variables
// let a = 10;
// var b = 12;

function abc() {
  console.log(a, b, c);

  const c = 2;
  let b = 3;
  var a = 4;
}
abc();
