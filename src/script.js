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

// Q9 - Function Hoisting - O/P based question

var x = 21;

var fun = function () {
  console.log(x);
  var x = 12;
};
console.log(x);
fun();


// Q10 - Params vs Arguments

// function square(num) {// Params
//   console.log(num * num);
// }

// square(5); // Arguments

function multiply(...nums) {
  // rest
  console.log(nums);
  console.log(nums[0] * nums[1]);
}

var arr = [5, 6];

multiply(...arr); // spread


// Q11 - Params vs Arguments - O/P based question

const fn = (a, x, y, ...numbers) => {
  console.log(x, y, numbers);
};

fn(5, 6, 3, 7, 8, 9);
*/
/*
// Q12 - Callback Function
// A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

// Q13 - Arrow Functions

// const add = (firstNum, secondNum) => {
//   return firstNum + secondNum;
// };

// 1 - syntax

function square(num) {
  return num * num;
}

const squareArrow = (num) => {
  return num * num;
};

// 2 - Implicit "return" keyword
const squareArr = (num) => num * num;

// 3 - Arguments

function fn() {
  console.log(arguments);
}
// fn(1, 2, 3);

const fnArr = () => {
  console.log(arguments);
};

// fnArr(1, 3, 4);

// 4 - "this" keyword

let user = {
  username: "Roadside Coder",
  rc1: () => {
    console.log("Subscribe to " + this.username);
  },
  rc2() {
    console.log("Subscribe to " + this.username);
  },
};

user.rc1();
user.rc2();
*/

/*
Closures in JavaScript
// Lexical scope

var userName = "Roadside coder";
// global scope
function local() {
  // local scope
  console.log(userName);
}

local();
function subscribe() {
  var name = "Aman Kumar";
  // inner scope 2
  function displayName() {
    // inner scope
    alert(name);
  }
  displayName();
}
subscribe();


// what is closure?
function makeFunc() {
  var name = "Mozilla";

  function displayName(num) {
    console.log(name, num);
  }
  return displayName;
}

// var myFucn = makeFunc();
// myFucn();

makeFunc()(5);

// Closure Scope chain -> It has access to all of the scopes
var userName = "Saket";
function makeFunc() {
  var name = "Mozilla";

  function displayName(num) {
    console.log(name, num, userName);
  }
  return displayName;
}

// var myFucn = makeFunc();
// myFucn();

makeFunc()(5);

// global scope
var e = 10;
function sum(a) {
  return function (b) {
    return function (c) {
      // outer function scope
      return function (d) {
        // local scope
        return a + b + c + d + e;
      };
    };
  };
}
console.log(sum(1)(2)(3)(4)); // log = 20

// Q1
let count = 0;
(function printCount() {
  if (count === 0) {
    let count = 1; // shadowing
    console.log(count); // 1
  }
  // count is still 0
  console.log(count); // 0
})();

// Q2 - Write a function that would allow you to do this

function createBase(num) {
  return function (innerNum) {
    console.log(innerNum + num);
  };
}

var addSix = createBase(6);
addSix(10); // returns 16
addSix(15); // returns 27

// Q3 - Time Optimization

function find() {
  let a = [];
  for (let i = 0; i < 1000000; i++) {
    a[i] = i * i;
  }

  return function (index) {
    console.log(a[index]);
  };
}

const closure = find();
console.time("6");
closure(6);
console.timeEnd("6");
console.time("50");
closure(50);
console.timeEnd("50");

// Q4 - Block scope and setTimeout

function a() {
  for (let i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i); // loged out 3, 3, 3 (because of var which is a fuction scope)
    }, i * 1000);
  }
}
a();

function a() {
  for (let i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i); // loged out 0,1,2 (because of let which is a block scope )
    }, i * 1000);
  }
}
a();


// without using let how can we solve this problem - we can use closure

for (var i = 0; i < 3; i++) {
  function inner(i) {
    setTimeout(function log() {
      console.log(i);
    }, i * 1000);
  }
  inner(i);
}


// Q5 - How would you use a closure to create a private counter?

function counter() {
  var _counter = 0; // private variable counter

  function add(increment) {
    // we are using these function to manipulate the private counter
    _counter += increment;
  }
  function retrive() {
    return "Counter = " + _counter;
  }

  return {
    add,
    retrive,
  };
}

const c = counter();
c.add(5);
c.add(10);

console.log(c.retrive());

// Q6 - What is Module Pattern?

var Module = (function () {
  function privateMethod() {
    // do something
    console.log("private");
  }

  return {
    publicMethod: function () {
      console.log("public");
    },
  };
})();

Module.publicMethod();
Module.privateMethod();

// Q7 - Make this run only once

let view;
function likeTheVideo() {
  let called = 0;

  return function () {
    if (called > 0) {
      console.log("Already Subscribed");
    } else {
      view = "Roadside Coder";
      console.log("Subscribe to", view);
      called++;
    }
  };
}

let isSubscribed = likeTheVideo();

isSubscribed();
isSubscribed();
isSubscribed();
isSubscribed();
isSubscribed();

// Q8 - Once Polyfill

function once(func, context) {
  let ran;

  return function () {
    if (func) {
      ran = func.apply(context || this, arguments);
      func = null;
    }

    return ran;
  };
}

const hello = once((a, b) => console.log("hello", a, b));

hello(1, 2);
hello(1, 2);
hello(1, 2);
hello(1, 2);
*/

// Q8 - Memoize Polyfill (Implement caching/memoize function)

function myMemoize(fn, context) {
  const res = [];
  return function (...args) {
    var argsCache = JSON.stringify(args);

    if (!res[argsCache]) {
      res[argsCache] = fn.call(context || this, ...args);
    }
    return res[argsCache];
  };
}

const clumsyProduct = (num1, num2) => {
  for (let i = 0; i < 100000000; i++) {}
  return num1 * num2;
};

const memoizedClumsyProduct = myMemoize(clumsyProduct);

console.time("first call");
console.log(memoizedClumsyProduct(9467, 7649));
console.timeEnd("first call");

console.time("second call");
console.log(memoizedClumsyProduct(9467, 7649));
console.timeEnd("second call");

// Q10 - difference between closure and scope
