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

/*
function abc() {
  console.log(a, b, c);

  const c = 2;
  let b = 3;
  var a = 4;
}
abc();
*/

// Map, Filter and Reduce
// Map

const nums = [1, 2, 3, 4, 5];

// const multiplyThree = nums.map((num, i, arr) => {
//   return num * 3 + i;
// });
// console.log(multiplyThree);

// Filter

// const moreThanTwo = nums.filter((num) => {
//   return num > 2;
// });
// console.log(moreThanTwo);

// Reduce

// const sum = nums.reduce((acc, curr, i, arr) => {
//   return acc + curr;
// }, 0);
// console.log(sum);

// Polyfill for map()
/*
Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};
const multiplyThree = nums.myMap((num) => {
  return num * 3;
});
console.log(multiplyThree);
*/

// Polyfill for filter()
/*
Array.prototype.myFilter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      temp.push(this[i]);
    }
  }
  return temp;
};

const moreThanTwo = nums.myFilter((num) => {
  return num > 2;
});
console.log(moreThanTwo);
*/

// Polyfill for reduce()
/*
Array.prototype.myReduce = function (cb, initialValue) {
  var accumulator = initialValue;

  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
  }

  return accumulator;
};

const sum = nums.myReduce((acc, curr, i, arr) => {
  return acc + curr;
}, 0);
console.log(sum);
*/

// Question 1: map vs forEach
/*
const arr = [2, 5, 3, 4, 7];

const mapResult = arr
  .map((ele) => {
    return ele + 3; // return a new array (don't modify the existing array)
  })
  .filter((ele) => {
    return ele > 7; // we can chain the map reduce filter method.
  });

const forEachResult = arr.forEach((ele, i) => {
  arr[i] = ele + 2; // return undefined (it modify the original array)
}); // we can't chain it

console.log(mapResult, forEachResult, arr);
*/

// map, filter and reduce - O/P based question
// Question - 1 (print the name of each student in uppercase)

let students = [
  { name: "Piyush", rollNumber: 31, marks: 80 },
  { name: "Jenny", rollNumber: 15, marks: 69 },
  { name: "Kaushal", rollNumber: 16, marks: 35 },
  { name: "Dilpreet", rollNumber: 7, marks: 55 },
];
/*
// using for loop
let names = [];
for (let i = 0; i < students.length; i++) {
  names.push(students[i].name.toUpperCase());
}
console.log(names);

// using map
const names = students.map((stu, i) => {
  return stu.name.toUpperCase();
});
console.log(names);


// Question - 2 (Return only details of those who scored more than 60 marks)

const scoreMoreThan60 = students.filter((stu) => stu.marks > 60);

console.log(scoreMoreThan60);

// Question - 3 (More than 60 marks and rollNumber greater than 15)

const details = students.filter((stu) => stu.marks > 60 && stu.rollNumber > 15);

console.log(details);


// Question - 4 {sum of marks of all students}

const totalMarks = students.reduce((acc, curr) => {
  return acc + curr.marks;
}, 0);

console.log(totalMarks);

// Question - 5 (Return only names of the student who scored more than 60)

const nameOfStudent = students
  .filter((stu) => stu.marks > 60)
  .map((stu) => stu.name);

console.log(nameOfStudent);


// Question - 6 {Return total marks for students with marks greater than 60
//                 after 20 marks have been added to those who scored less than 60}

const totalMarks = students
  .map((stu) => {
    if (stu.marks < 60) {
      stu.marks += 20;
    }
    return stu;
  })
  .filter((stu) => stu.marks > 60)
  .reduce((acc, curr) => {
    return acc + curr.marks;
  }, 0);

console.log(totalMarks); //output = 224
*/

// Functions in JavaScript.
/*
//Q1 - what is function declaration?
function square(num) {
  return num * num;
}

console.log(square(4));  // 16

//Q2 - what is function expression?
const square = function (num) {
  return num * num;
};

console.log(square(4)); // 16


// Q3 - what are First Class Functions?
// Ans - where a function can be treated like a variable.

function square(num) {
  return num * num;
}
function displaySquare(fn) {
  console.log("Square is " + fn(5));
}

displaySquare(square);

// Q4 - what is IIFE?
(function square(num) {
  console.log(num * num);
})(5);

// Q5 - IIFE - O/P based question

(function (x) {
  return (function (y) {
    console.log(x);
  })(2);
})(1);


// Q6 - Function Scope

var num1 = 20;
num2 = 3;
name = "Roadside Coder";

function multiply() {
  return num1 * num2;
}
console.log(multiply());

// A nested function example
function getScore() {
  var num1 = 2;
  num2 = 3;

  function add() {
    return name + " scored " + (num1 + num2);
  }

  return add();
}

console.log(getScore());


// Q7 - Function Scope - O/P based question

for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}


// Q8 - Funcion Hoisting
functionName();
// console.log(x);

function functionName() {
  console.log(x);
  var x = 34;
  console.log("AMan KumaR");
}

// var x = 34;
*/

// Q9 - Function Hoisting - O/P based question

var x = 21;

var fun = function () {
  console.log(x);
  var x = 12;
};
console.log(x);
fun();
